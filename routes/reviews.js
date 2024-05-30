const express = require('express')
const router = express.Router({ mergeParams: true })
const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError') //error class 
const Campground = require('../models/campground')
const { reviewSchema } = require('../campgroundSchema.js')
const Review = require('../models/review')
const { validateReview, isLoggedin, isReviewAuthor } = require('../middleware.js')
const reviews = require('../controllers/reviews.js')




router.post('/', isLoggedin, validateReview, catchAsync(reviews.create))


router.delete('/:reviewId', isLoggedin, isReviewAuthor, catchAsync(reviews.delete))

module.exports = router
