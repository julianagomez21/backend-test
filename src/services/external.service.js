const axios = require("axios");
require("dotenv").config();

const { AppDataSource } = require("../data/data-source");

const getExternalData = async (symbol = "AAPL") => {
  try {
    const apiKey = process.env.FINNHUB_API_KEY;

    if (!apiKey) {
      throw new Error("API key no definida en variables de entorno");
    }

    const response = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
    );

    const data = response.data;

    if (!data || data.c === 0) {
      throw new Error("No se encontraron datos");
    }

    const currentPrice = data.c;
    const previousClose = data.pc;

    const change = currentPrice - previousClose;
    const changePercent = (change / previousClose) * 100;

    let trend = "stable";
    if (change > 0) trend = "up";
    if (change < 0) trend = "down";

    const dataToSave = {
      symbol,
      currentPrice,
      high: data.h,
      low: data.l,
      open: data.o,
      previousClose
    };

    const repo = AppDataSource.getRepository("Data");
    await repo.save(dataToSave);

    return {
      price: currentPrice,
      change: Number(change.toFixed(2)),
      changePercent: Number(changePercent.toFixed(2)),
      trend
    };

  } catch (error) {
    console.error("Error en getExternalData:", error.message);
    throw new Error("Error obteniendo datos financieros");
  }
};

module.exports = { getExternalData };