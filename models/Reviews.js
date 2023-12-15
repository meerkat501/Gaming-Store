const { Model, DataTypes } = require('sequelize');
const Sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    userId: { 
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    gameId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'game',
            key: 'id'
        }
    },
    Sequelize,
    timestamps: true,
    modelName: 'review',

});

module.exports = Review;