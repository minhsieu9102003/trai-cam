const Reservation = require('../models/reservation');
const Campground = require('../models/campground');

module.exports.index = async (req, res) => {
    // Find all campgrounds that belong to the current host
    const campgrounds = await Campground.find({ author: req.user._id });

    // Find reservations linked to those campgrounds
    const reservations = await Reservation.find({
        campground: { $in: campgrounds.map(camp => camp._id) }
    })
        .populate('user')
        .populate({
            path: 'campground',
            populate: {
                path: 'image'  // This ensures images are populated
            }
        })
        .lean()

    res.render('reservations/index', { reservations });
};
module.exports.userReservations = async (req, res) => {
    try {
        // Find reservations that belong to the logged-in user (guest)
        const reservations = await Reservation.find({ user: req.user._id })
            .populate('campground')
            .sort({ checkIn: -1 });  // Sort by check-in date

        res.render('reservations/userIndex', { reservations });
    } catch (e) {
        console.error(e);
        req.flash('error', 'Lỗi khi tải đặt chỗ');
        res.redirect('/campgrounds');
    }
};
