// routes/reservations.js

const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedin } = require('../middleware');
const reservations = require('../controllers/reservations.js');
const Reservation = require('../models/reservation');
const Campground = require('../models/campground');
const User = require('../models/user');

// Existing route for creating a reservation
router.post('/campgrounds/:campgroundId', isLoggedin, catchAsync(reservations.createReservation));

// router.get('/reservations/host', isLoggedin, catchAsync(async (req, res) => {
//     const campgrounds = await Campground.find({ author: req.user._id }); // Find campgrounds owned by the host
//     const reservations = await Reservation.find({ campground: { $in: campgrounds.map(camp => camp._id) } })
//         .populate('user')
//         .populate('campground');

//     res.render('reservations/index', { reservations });
// }));

// New route for displaying reservation details
router.get('/reservations/:id', isLoggedin, catchAsync(async (req, res) => {
    const { id } = req.params;
    const reservation = await Reservation.findById(id)
        .populate('user') // Populate guest information
        .populate({
            path: 'campground',
            populate: {
                path: 'author' // Populate host information
            }
        })
        .populate('payment')

    if (!reservation) {
        req.flash('error', 'Không tìm thấy đặt chỗ.');
        return res.redirect('/campgrounds');
    }
    if (!reservation.campground) {
        req.flash('error', 'Không tìm thấy khu cắm trại liên kết với đặt chỗ này.');
        return res.redirect('/campgrounds');
    }
    if (!reservation.campground.author) {
        req.flash('error', 'Không tìm thấy chủ của khu cắm trại này.');
        return res.redirect('/campgrounds');
    }
    // Check if the current user is the host of the campground
    if (!reservation.campground.author._id.equals(req.user._id)) {
        req.flash('error', 'Bạn không có quyền xem đặt chỗ này.');
        return res.redirect('/campgrounds');
    }

    res.render('reservations/show', { reservation });
}));

router.get('/my-reservations', isLoggedin, reservations.userReservations);

router.get('/my-reservations/:id', isLoggedin, catchAsync(reservations.showGuestReservation));

module.exports = router;
