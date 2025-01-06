// models/notification.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    campground_id: {
        type: Schema.Types.ObjectId,
        ref: 'Campground',
    },
    reservation_id: { type: Schema.Types.ObjectId, ref: 'Reservation' },
    content: String,
    is_read: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Notification', notificationSchema);
