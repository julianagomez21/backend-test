const express = require("express");
const app = express();

app.use(express.json());

module.exports = app;

const externalModule = require("./modules/financial.module");

app.use("/api", externalModule);