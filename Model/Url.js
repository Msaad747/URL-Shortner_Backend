import {DataTypes} from "sequelize";
import sequelize from "../db.js";

const Url = sequelize.define("Url", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    shortend_url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});
export default Url;