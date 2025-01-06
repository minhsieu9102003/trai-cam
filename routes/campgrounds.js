const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError') //error class 
const { campgroundSchema } = require('../campgroundSchema.js')
const Campground = require('../models/campground')
const { isLoggedin, isAuthor, validateCampground, isAdmin, isBuyer, isSeller } = require('../middleware.js')
const campgrounds = require('../controllers/campgrounds.js')
const { storage } = require('../cloudinary')

const multer = require('multer')
const upload = multer({ storage })


router.route('/')
    .get(isAdmin, catchAsync(campgrounds.index))
    .post(isLoggedin, isSeller, upload.array('campground[image]'), validateCampground, catchAsync(campgrounds.createCamp))



router.get('/new', isLoggedin, isAdmin, isSeller, campgrounds.new)


router.route('/:id')
    .get(catchAsync(campgrounds.show))
    .put(isLoggedin, isAuthor, isSeller, upload.array('campground[image]'), validateCampground, catchAsync(campgrounds.updateCamp))
    .delete(isLoggedin, isAuthor, isSeller, catchAsync(campgrounds.delete))




router.get('/:id/edit', isLoggedin, isAuthor, isSeller, campgrounds.edit)
router.post('/:id/reservation', isLoggedin, isBuyer, catchAsync(campgrounds.makeReservation));







module.exports = router