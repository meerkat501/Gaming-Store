const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Review } = require('../models');

// Route for the homepage
router.get('/', withAuth, (req, res) => {
  
    res.render('homepage', {
        logged_in: req.session.logged_in,
    });

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
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;

