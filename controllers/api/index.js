const express = require('express')
const router = express.Router();
const userRoutes = require('./userRoutes');
const homeRoute= require('../gameRoutes')

router.use('/users', userRoutes);
router.use('/', homeRoute);

module.exports = router;