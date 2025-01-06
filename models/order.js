// models/order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: String,
    amount: Number,
    orderInfo: String,
    status: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    campground: {
        type: Schema.Types.ObjectId,
        ref: 'Campground',
    },
    reservation: {
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);
