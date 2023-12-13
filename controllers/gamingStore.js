const {Game} = require('../models')
const {Deal} = require('../models')

exports.getHomePage = async (req, res) => {
    const featuredGames = await Game.findFeaturedGames();
    res.render('home',{ title: 'Home - Gaming Store', featuredGames });
};

exports.getCatalog = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.render('catalog', { title: 'Catalog - Gaming Store', games });
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

exports.getGames = async (req, res) => {
    try{
        const game = await Game.findById(req.params.id);
        if (game) {
            res.render('game-details', { title: game.name, game})
        } else {
            res.status(404).render('not-found', { title:'Not Found'})
        }
    } catch (err) {
        res.status(500).render('error', {err})
    }
};

exports.getDeals = async (req, res) => {
    try {
        const deals = await Deal.findCurrentDeals();
        res.render('special-deals', { title: 'Special Deals', deals});
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

exports.getNewReleases = async (req, res) => {
    try {
        const newReleases = await Game.findNewReleases();
        res.render('new-releases', { title: 'New Releases', newReleases});
    } catch (err) {
        res.status(500).render('error', {err});
    }
};
  

module.exports = router;