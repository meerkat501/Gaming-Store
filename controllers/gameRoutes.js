const express = require('express');
const router = express.Router();
const gamingStore = require('./gamingStore');


router.get('/', gamingStore.getHomePage);
router.get('/catalog', gamingStore.getCatalog);
router.get('/game/:id', gamingStore.getGames); 
router.get('/deals', gamingStore.getDeals); 
router.get('/new-releases', gamingStore.getNewReleases);


module.exports = router;
