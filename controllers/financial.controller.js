const { getExternalData } = require("../services/external.service");

const fetchFinancialData = async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await getExternalData(symbol);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { fetchFinancialData };