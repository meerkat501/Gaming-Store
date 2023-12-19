const Game = require('./game');
const Genre = require('./genre');
const Platform = require('./platform');
const Deal = require('./deals');
const Review = require('./reviews');
const User = require('./User');

Game.belongsToMany(Genre, {
    through: 'GameGenre',
    foreignKey: 'gameId',
    otherKey: 'genreId'
});

Genre.belongsToMany(Game, {
    through: 'GameGenre',
    foreignKey: 'genreId',
    otherKey: 'gameId'
});

Game.belongsToMany(Platform, {
    through: 'GamePlatform',
    foreignKey: 'gameId',
    otherKey: 'platformId'
});

Platform.belongsToMany(Game, {
    through: 'GamePlatform',
    foreignKey: 'platformId',
    otherKey: 'gameId'
});

Game.hasMany(Deal, {
    foreignKey: 'gameId',
    onDelete: 'CASCADE'
});

Deal.belongsTo(Game, {
    foreignKey: 'gameId'
});

Game.hasMany(Review, {
    foreignKey: 'gameId',
    onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
    foreignKey: 'gameId'
});
User.hasMany(Review, { 
    foreignKey: 'userId' 
});
Review.belongsTo(User, { 
    foreignKey: 'userId' 
});

module.exports = { Game, Genre, Platform, Deal, Review, User };
