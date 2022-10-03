import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "lwala_commodity_approval", // db name,
  "postres", // username
  "root", // password
  {
    host: "localhost",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);