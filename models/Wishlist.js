module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('Wishlist', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gameId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Wishlist.associate = function(models) {

      Wishlist.belongsTo(models.User, { 
        foreignKey: 'userId' });
        
      Wishlist.belongsTo(models.Game, { 
        foreignKey: 'gameId' });
    };
  
    return Wishlist;
  };