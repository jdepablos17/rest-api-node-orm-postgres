import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./users.js";

export const Countries = sequelize.define('countries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false
});

Countries.hasMany(Users, {
    foreignKey: 'id_country',
    sourceKey: 'id'
});

Users.belongsTo(Countries, {
    foreignKey: 'id_country',
    targetKey: 'id'
});
