const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sequelize,
    modelName:'genre'
});

module.exports = Genre;