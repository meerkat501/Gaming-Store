const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const wishlistRoutes = require('./wishlistRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/wishlist', wishlistRoutes);

module.exports = router;