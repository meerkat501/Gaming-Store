const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const gamingStore = require('./gamingStore');
const { Review } = require('../models'); 

router.get('/', gamingStore.getHomePage);
router.get('/catalog', gamingStore.getCatalog);
router.get('/game/:id', gamingStore.getGames); 
router.get('/deals', gamingStore.getDeals); 
router.get('/new-releases', gamingStore.getNewReleases);

// Route for posting a review (with authentication middleware)
router.post('/game/:id/review', withAuth, async (req, res) => {
    try {
        const { content, rating } = req.body;
        await Review.create({
            content,
            rating,
            gameId: req.params.id
        });
        res.redirect(`/game/${req.params.id}`);
    } catch (err) {
        res.status(500).render('error', { err });
    }
});

module.exports = router;
