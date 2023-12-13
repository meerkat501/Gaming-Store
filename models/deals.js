const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deal extends Model {}

Deal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'game',
            key: 'id'
        },
    },
    discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sequelized,
    timestamps: true,
    modelName: 'deal'
});

module.exports = Deal;