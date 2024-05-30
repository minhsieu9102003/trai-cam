const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const { storeReturnTo } = require('../middleware')
const users = require('../controllers/users.js')
const { isLoggedin, isAuthor, validateCampground } = require('../middleware.js')


router.route('/register')
    .get(users.register)
    .post(catchAsync(users.registerIn))




router.post('/login', storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/register' }), users.registerRedirect)

router.get('/logout', users.logout);

router.get('/admin', isLoggedin, users.admin)

router.delete('/users/:id', catchAsync(users.deleteUser))

router.get('/users/:id/edit', isLoggedin, users.renderEditUserForm)
router.put('/users/:id', isLoggedin, catchAsync(users.updateUser))

module.exports = router 