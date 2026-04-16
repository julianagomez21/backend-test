const { DataSource } = require("typeorm");
const DataEntity = require("../entities/Data.entity");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  entities: [DataEntity],
});

module.exports = { AppDataSource };