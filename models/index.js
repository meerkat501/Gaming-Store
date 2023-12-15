const Game = require('./Game');
const Genre = require('./genre');
const Platform = require('./platform');
const Deal = require('./deals');
const Review = require('./Reviews');

Game.belongsToMany = (Genre, {
    through: 'GameGenre'
});

Genre.belongsToMany = (Game, {
    through: 'GameGenre'
});

Game.belongsToMany(Platform, {
    through: 'GamePlatform'
})

Platform.belongsToMany(Game, {
    through: 'GamePlatform'
});

Game.hasMany(Deal, {
    foreignKey: 'gameId',
    onDelete: 'CASCADE'
});

Deal.belongsTo(Game, {
    foreignKey: 'gameId',
});

Game.hasMany(Review, {
    foreignKey: 'gameId',
    onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
    foreignKey: 'gameId'
});

module.exports = {Game, Genre, Platform, Deal, Review};