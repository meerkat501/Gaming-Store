// routes/wishlist.js

const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Game, Wishlist, User } = require('../models');

// Get wishlist for a user

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Wishlist }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a game to the wishlist

router.post('/add', withAuth, async (req, res) => {
  try {
    const newWishlist = await Wishlist.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWishlist);
  } catch (err) {
    res.status(400).json(err);
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