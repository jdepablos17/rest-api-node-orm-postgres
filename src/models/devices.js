import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Os } from "./os.js";

export const Devices = sequelize.define(
    "devices",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      }
    }
  );

  