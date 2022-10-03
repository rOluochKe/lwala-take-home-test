import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "lwala_commodity_approval", // db name,
  "postgres", // username
  "postgres", // password
  {
    host: "localhost",
    dialect: "postgres",
  }
);