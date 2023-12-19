const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', (req, res) => {
    const context = {
        title: 'Welcome to Our Gaming Store',
        description: 'Find the latest and greatest games here!',
       
    };

    res.render('homepage', context);
});

module.exports = router;

