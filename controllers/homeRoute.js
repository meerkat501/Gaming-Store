const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const gamingStore = require('../controllers/gamingStore')

router.get('/', async (req, res) => {
    try {
        await gamingStore.getHomePage(req, res);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/catalog', async (req, res) => {
    try {
        await gamingStore.getCatalog(req, res);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/game/:id', async (req, res) => {
    try {
    await gamingStore.getGame(req, res); 
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/deals', async (req, res) => { 
    try {
        await gamingStore.getdeals(req, res);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/new-releases', async (req, res) =>{
    try {
        await gamingStore.getNewReleases(req, res)
    } catch (err) {
        res.status(500).send(err, message);
    }
})