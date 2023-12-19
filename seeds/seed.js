const sequelize = require('../config/connection');

const gameData = [
    {
        title: "Game 1",
        description: "Description",
        price: 59.99,
        releaseDate: new Date(),
        platform: "PC",
        genre: "Action"
    },
    {
        title: "Game 2",
        description: "Description",
        price: 49.99,
        releaseDate: new Date(),
        platform: "PS5",
        genre: "Adventure"
    }
   
];

const genreData = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Horror" },
    { name: "RPG"},
    { name: "MMO"},
    { name: "Sports"},
    { name: "Survival" },
    { name: "Strategy" },
    { name: "Battle Royale" },
    { name: "Puzzle" },
    { name: "Simulation" },


    
];

const platformData = [
    { name: "PC" },
    { name: "PS1 " },
    { name: "PS2" },
    { name: "PS3" },
    { name: "PS4" },
    { name: "PS5" },
    { name: "XBOX ORIGINAL" },
    { name: "XBOX 360" },
    { name: "XBOX ONE" },
    { name: "XBOX SERIES S" },
    { name: "XBOX SERIES X" },
    { name: "NINTENDO SWITCH" },

];
const { Game, Genre, Platform } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true }); 

    await Genre.bulkCreate(genreData);
    await Platform.bulkCreate(platformData);
    await Game.bulkCreate(gameData);

    console.log('Database seeded!');
};

seedDatabase();
