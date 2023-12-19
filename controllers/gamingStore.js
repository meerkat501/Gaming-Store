const { Game, Deal } = require('../models');

const gamingStoreController = {};

gamingStoreController.getHomePage = async (req, res) => {
    try {
        const featuredGames = await Game.findFeaturedGames();
        res.render('home', { title: 'Home - Gaming Store', featuredGames });
    } catch (err) {
        res.status(500).render('error', { err });
    }
};

gamingStoreController.getCatalog = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.render('catalog', { title: 'Catalog - Gaming Store', games });
    } catch (err) {
        res.status(500).render('error', { err });
    }
};

gamingStoreController.getGames = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (game) {
            res.render('game-details', { title: game.name, game });
        } else {
            res.status(404).render('not-found', { title: 'Not Found' });
        }
    } catch (err) {
        res.status(500).render('error', { err });
    }
};

gamingStoreController.getDeals = async (req, res) => {
    try {
        const deals = await Deal.findCurrentDeals();
        res.render('special-deals', { title: 'Special Deals', deals });
    } catch (err) {
        res.status(500).render('error', { err });
    }
};

gamingStoreController.getNewReleases = async (req, res) => {
    try {
        const newReleases = await Game.findNewReleases();
        res.render('new-releases', { title: 'New Releases', newReleases });
    } catch (err) {
        res.status(500).render('error', { err });
    }
};

module.exports = gamingStoreController;
