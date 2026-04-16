const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Data",
  tableName: "financial_data",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    symbol: {
      type: "varchar"
    },
    currentPrice: {
      type: "float"
    },
    high: {
      type: "float"
    },
    low: {
      type: "float"
    },
    open: {
      type: "float"
    },
    previousClose: {
      type: "float"
    },
    createdAt: {
      type: "datetime",
      createDate: true
    }
  }
});