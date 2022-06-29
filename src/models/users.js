import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_country: {
      type: DataTypes.INTEGER,
      foreingKey: true
    },
    gender: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);
