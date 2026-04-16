const express = require("express");
const router = express.Router();
const { fetchFinancialData } = require("../controllers/financial.controller");

router.get("/financial-data/:symbol", fetchFinancialData);

module.exports = router;