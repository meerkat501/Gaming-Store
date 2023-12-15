const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Platform extends Model {}

Platform.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Platform;