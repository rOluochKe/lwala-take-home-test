import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Commodity = sequelize.define(
  "commodity",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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