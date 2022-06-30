import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "DBII_PII_ORM", 
    "postgres", 
    "Mathias16=",
    { 
    host: "localhost",
    dialect: "postgres",
    }
);