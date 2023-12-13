exports.getHomePage = async (req, res) => {
    const featuredGames = await gameModel.findFeaturedGames();
    res.render('home',{ title: 'Home - Gaming Store', featuredGames });
};

exports.getCatalog = async (req, res) => {
    try {
        const games = await gameModel.findAll();
        res.render('catalog', { title: 'Catalog - Gaming Store', games });
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

exports.getGames = async (req, res) => {
    try{
        const game = await gameModel.findById(req.params.id);
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
        const deals = await deals.model.findCurrentDeals();
        res.render('special-deals', { title: 'Special Deals', deals});
    } catch (err) {
        res.status(500).render('error', {err});
    }
};

exports.getNewReleases = async (req, res) => {
    try {
        const newReleases = await gamesModel.findNewReleases();
        res.render('new-releases', { title: 'New Releases', newReleases});
    } catch (err) {
        res.status(500).render('error', {err});
    }
};
  

module.exports = router;