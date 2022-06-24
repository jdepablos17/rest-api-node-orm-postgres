import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "basededatos2", 
    "postgres", 
    "root",
    { 
    host: "localhost",
    dialect: "postgres",
    }
);