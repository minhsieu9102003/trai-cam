// models/reservation.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Campground = require('./campground')
const User = require('./user')

const ReservationSchema = new Schema({
    campground: {
        type: Schema.Types.ObjectId,
        ref: 'Campground',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    note: {
        type: String,
    },
    status: {
        type: String,
        default: 'Pending',
    },
    payment: {
        transactionNo: String,
        orderId: String,
        amount: Number,
        bankCode: String,
        cardType: String,
        payDate: String
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash'],
        default: 'Credit Card'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
