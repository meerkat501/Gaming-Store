const {Game, Deal, Review} = require('../models')

router.getHomePage = async (req, res) => {
    const featuredGames = await Game.findFeaturedGames();
    res.render('home',{ title: 'Home - Gaming Store', featuredGames });
};

router.getCatalog = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.render('catalog', { title: 'Catalog - Gaming Store', games });
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

router.getGames = async (req, res) => {
    try {
        const gameId = req.params.id; 
        const game = await Game.findByPk(gameId, {
            include: [{
                model: Review, 
                as: 'reviews' 
            }]
        });

        if (game) {
            res.render('game-details', { title: game.name, game, reviews: game.reviews });
        } else {
            res.status(404).render('not-found', { title: 'Not Found' });
        }
    } catch (err) {
        res.status(500).render('error', { err });
    }
};

router.getDeals = async (req, res) => {
    try {
        const deals = await Deal.findCurrentDeals();
        res.render('special-deals', { title: 'Special Deals', deals});
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

router.getNewReleases = async (req, res) => {
    try {
        const newReleases = await Game.findNewReleases();
        res.render('new-releases', { title: 'New Releases', newReleases});
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

module.exports = router;