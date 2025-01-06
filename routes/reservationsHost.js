const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedin } = require('../middleware');
const reservationsHost = require('../controllers/reservationsHost');

router.get('/reservations', isLoggedin, catchAsync(reservationsHost.index));

module.exports = router;
