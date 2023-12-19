const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Review } = require('../models');

// Route for the homepage
router.get('/', (req, res) => {
    const context = {
        title: 'Welcome to Our Gaming Store',
        description: 'Find the latest and greatest games here!',
       
    };

    res.render('homepage', context);
});

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

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });

module.exports = router;

