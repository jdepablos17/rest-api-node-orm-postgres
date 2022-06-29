import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Items = sequelize.define(
  "items",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    offer: {
      type: DataTypes.FLOAT,
    }
  },
  {
    timestamps: false,
  }
);
