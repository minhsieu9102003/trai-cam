const express = require('express');
const router = express.Router();
const Notification = require('../models/notification');
const Reservation = require('../models/reservation'); // Assuming you have a Reservation model
const Campground = require('../models/campground'); // If needed
const catchAsync = require('../utils/catchAsync'); // Your async error handler middleware

router.get('/notifications/:notificationId', catchAsync(async (req, res) => {
    const { notificationId } = req.params;

    // Find the notification
    const notification = await Notification.findById(notificationId);

    if (!notification) {
        req.flash('error', 'Notification not found.');
        return res.redirect('back');
    }

    // Mark the notification as read
    notification.is_read = true;
    await notification.save();

    // Decrease the notification count on the client side (we'll handle this in the client-side script)

    // Redirect to the relevant page (e.g., reservation detail page)
    // Assume that the notification contains the reservation ID or enough info to find it
    const reservation = await Reservation.findById
        (notification.reservation_id
        )
        .populate('campground')
        .populate('user');

    if (!reservation) {
        req.flash('error', 'Reservation not found.');
        return res.redirect('back');
    }

    // Redirect to the reservation detail page
    res.redirect(`/reservations/${reservation._id}`);
}));

module.exports = router;
