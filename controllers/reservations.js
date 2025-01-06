// controllers/reservations.js

const Campground = require('../models/campground');
const Reservation = require('../models/reservation');
const Notification = require('../models/notification'); // Import Notification model

module.exports.createReservation = async (req, res, next) => {
    try {
        const { campgroundId } = req.params;
        const { numberOfPeople, checkIn, checkOut, note } = req.body.reservation;

        const campground = await Campground.findById(campgroundId).populate('author');
        if (!campground) {
            req.flash('error', 'Không tìm thấy khu cắm trại');
            return res.redirect('/campgrounds');
        }

        // Check if the campground has enough capacity
        let totalReserved = 0;
        const reservations = await Reservation.find({ campground: campgroundId });
        for (let reservation of reservations) {
            totalReserved += reservation.numberOfPeople;
        }

        if ((totalReserved + parseInt(numberOfPeople)) > campground.capacity) {
            req.flash('error', 'Khu cắm trại không đủ sức chứa');
            return res.redirect(`/campgrounds/${campgroundId}`);
        }

        // Create a new reservation
        const reservation = new Reservation({
            campground: campgroundId,
            user: req.user._id,
            numberOfPeople,
            checkIn,
            checkOut,
            note,
            status: 'upcoming',
        });

        await reservation.save();

        // Add reservation to campground's reservations array
        campground.reservations.push(reservation);
        await campground.save();

        // Create a notification for the host
        const hostId = campground.author._id.toString(); // Ensure it's a string

        const notification = new Notification({
            user_id: hostId,
            campground_id: campground._id,
            reservation_id: reservation._id,
            content: `${req.user.username} đã đặt chỗ tại khu cắm trại của bạn.`,
            is_read: false,
        });
        await notification.save();

        // Emit the notification to the host's room
        const io = req.app.get('io'); // Access the io instance from the app
        io.to(hostId).emit('newNotification', notification);

        req.flash('success', 'Đặt chỗ thành công!');
        res.redirect(`/payment/create_payment_url/${campgroundId}?reservationId=${reservation._id}`);
    } catch (e) {
        console.error(e);
        next(e);
    }
};

module.exports.userReservations = async (req, res, next) => {
    try {
        // Find reservations where the current user is the guest
        const reservations = await Reservation.find({ user: req.user._id })
            .populate('campground');

        res.render('reservations/myReservations', { reservations });
    } catch (e) {
        console.error(e);
        req.flash('error', 'Không thể tải danh sách đặt chỗ.');
        res.redirect('/campgrounds');
    }
};

module.exports.showGuestReservation = async (req, res) => {
    const { id } = req.params;

    const reservation = await Reservation.findById(id)
        .populate('campground')
        .populate('user')
        .exec(); // Ensure to populate user and campground

    if (!reservation) {
        req.flash('error', 'Không tìm thấy đặt chỗ.');
        return res.redirect('/my-reservations');
    }

    // Security check to ensure the user can only see their reservations
    if (!reservation.user._id.equals(req.user._id)) {
        req.flash('error', 'Bạn không có quyền xem đặt chỗ này.');
        return res.redirect('/my-reservations');
    }
    console.log('Payment Details:', reservation.payment);
    res.render('reservations/myReservationShow', { reservation });
};
