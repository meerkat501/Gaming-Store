// routes/wishlist.js

const express = require('express');

const router = express.Router();

const { Wishlist, Game } = require('../models');

const { withAuth } = require('../utils/auth'); // Authentication middleware

// Get wishlist for a user

router.get('/', withAuth, async (req, res) => {

  try {
    const wishlist = await Wishlist.findAll({

      where: { userId: req.session.userId },

      include: [{ model: Game }]

    });

    res.json(wishlist);

  } catch (error) {

    res.status(500).json({ message: 'Error getting wishlist', error });

  }

});

// Add a game to the wishlist

router.post('/add', withAuth, async (req, res) => {

  try {

    const { gameId } = req.body;

    await Wishlist.create({ userId: req.session.userId, gameId });

    res.json({ message: 'Game added to wishlist' });

  } catch (error) {

    res.status(500).json({ message: 'Error adding to wishlist', error });

  }

});

// Remove a game from the wishlist

router.post('/remove', withAuth, async (req, res) => {

  try {

    const { gameId } = req.body;

    await Wishlist.destroy({

      where: { userId: req.session.userId, gameId }

    });

    res.json({ message: 'Game removed from wishlist' });

  } catch (error) {

    res.status(500).json({ message: 'Error removing from wishlist', error });

  }

});

module.exports = router;