import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Request = sequelize.define(
  "requests",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    chw: {
      type: DataTypes.STRING,
    },
    cha: {
      type: DataTypes.STRING,
    },
    malariaDrugs: {
      type: DataTypes.INTEGER,
    },
    familyPlanning: {
      type: DataTypes.INTEGER,
    },
    zincTablets: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
