const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Platform extends Model {}

Platform.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'platform',
});


module.exports = Platform;