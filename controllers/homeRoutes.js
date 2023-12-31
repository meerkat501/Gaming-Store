const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Game, Review, User } = require('../models');

// Route for the homepage
router.get('/', async (req, res) => {
    const gameData = await Game.findAll();
    console.log(gameData);

    const games = gameData.map((game) => game.get({ plain: true }));

  
    res.render('homepage', {
        games,
        logged_in: req.session.logged_in,
    });

});

router.get('/wishlist', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] }
        });
    
        const user = userData.get({ plain: true });
    
        res.render('wishlist', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/game/action', async (req, res) => {
    const gameData = await Game.findAll();
    console.log(gameData);

    const games = gameData.filter((game) => {
        console.log(game);
        game.genre === "Adventure"
        game.get({ plain: true })
    }
  );

  
    res.render('homepage', {
        games,
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

