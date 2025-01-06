const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const Campground = require('../models/campground');
const qs = require('qs');
const Reservation = require('../models/reservation')

// Ensure the path is correct
// If you have Order, Reservation models involved later, you can require them similarly.

const tmnCode = process.env.VNP_TMNCODE;       // e.g. 'YOUR_TMN_CODE'
const secretKey = process.env.VNP_HASHSECRET;  // e.g. 'YOUR_HASH_SECRET'
const vnpUrl = process.env.VNP_URL;            // e.g. 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'
const returnUrl = process.env.VNP_RETURNURL;

function sortObject(obj) {
    const sorted = {};
    const keys = Object.keys(obj).sort();
    for (let key of keys) {
        sorted[key] = obj[key];
    }
    return sorted;
}

// Route to create payment URL based on campground price
// Route to create payment URL based on campground price
router.get('/payment/create_payment_url/:id', async (req, res) => {
    const { id: campgroundId } = req.params;
    const { reservationId } = req.query;

    const reservation = await Reservation.findById(reservationId).populate('campground');
    if (!reservation) {
        req.flash('error', 'Không tìm thấy đặt chỗ');
        return res.redirect(`/campgrounds/${campgroundId}`);
    }

    const orderId = reservation._id;
    const { campground, numberOfPeople, checkIn, checkOut } = reservation;
    const pricePerDay = campground.price;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const numberOfDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) + 1;
    const totalAmount = numberOfDays * pricePerDay * numberOfPeople; // Total in VND
    const scaledAmount = totalAmount * 100;
    const orderInfo = `Đặt chỗ tại ${reservation.campground.title}`;

    const ipAddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const pad = (n) => (n < 10 ? '0' + n : n);
    const date = new Date();

    // Correctly generate the current date in VNPay's required format
    const createDate =
        date.getFullYear().toString() +
        pad(date.getMonth() + 1) +
        pad(date.getDate()) +
        pad(date.getHours()) +
        pad(date.getMinutes()) +
        pad(date.getSeconds());

    // Correctly generate the expiration date (15 minutes later)
    const expireDate = new Date(date.getTime() + 15 * 60 * 1000);
    const expire =
        expireDate.getFullYear().toString() +
        pad(expireDate.getMonth() + 1) + // Add 1 to get the correct month
        pad(expireDate.getDate()) +
        pad(expireDate.getHours()) +
        pad(expireDate.getMinutes()) +
        pad(expireDate.getSeconds());


    let vnp_Params = {
        vnp_Version: '2.1.0',
        vnp_Command: 'pay',
        vnp_TmnCode: tmnCode,
        vnp_Locale: 'vn',
        vnp_CurrCode: 'VND',
        vnp_TxnRef: orderId,
        vnp_OrderInfo: orderInfo,
        vnp_OrderType: 'billpayment',
        vnp_Amount: scaledAmount,
        vnp_ReturnUrl: returnUrl,
        vnp_IpAddr: ipAddr,
        vnp_CreateDate: createDate,
        vnp_ExpireDate: expire,
    };

    const sortedEntries = Object.entries(vnp_Params).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    const sp = new URLSearchParams(sortedEntries);
    const signData = sp.toString();

    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
    vnp_Params.vnp_SecureHash = signed;

    const redirectUrl = `${vnpUrl}?${sp.toString()}&vnp_SecureHash=${signed}`;
    res.redirect(redirectUrl);
    console.log('VNPay Parameters:', vnp_Params);
});




// Return URL route - after payment attempt
router.get('/vnpay_return', async (req, res) => {
    let vnp_Params = req.query;
    const secureHash = vnp_Params['vnp_SecureHash'];

    // Remove secure hash and type before signing
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    // Sort the parameters the same way as in creation
    const sortedEntries = Object.entries(vnp_Params)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    // Build a query string using URLSearchParams for consistency
    const sp = new URLSearchParams();
    for (const [key, value] of sortedEntries) {
        sp.append(key, value.toString());
    }

    // signData is just the query string without '?'
    const signData = sp.toString();
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    if (secureHash === signed) {
        const rspCode = vnp_Params['vnp_ResponseCode'];
        const reservationId = vnp_Params['vnp_TxnRef'];
        // Extract additional info
        const transactionNo = vnp_Params['vnp_TransactionNo'];
        const bankCode = vnp_Params['vnp_BankCode'];
        const cardType = vnp_Params['vnp_CardType'];
        const payDateStr = vnp_Params['vnp_PayDate']; // format: yyyyMMddHHmmss

        // Format payDateStr into a readable datetime
        const year = payDateStr.substring(0, 4);
        const month = payDateStr.substring(4, 6);
        const day = payDateStr.substring(6, 8);
        const hour = payDateStr.substring(8, 10);
        const minute = payDateStr.substring(10, 12);
        const second = payDateStr.substring(12, 14);
        const payDateFormatted = `${day}/${month}/${year} ${hour}:${minute}:${second}`;


        const reservation = await Reservation.findById(reservationId);
        if (reservation) {

            const payDateStr = vnp_Params['vnp_PayDate'];
            const formattedPayDate = `${payDateStr.substring(6, 8)}/${payDateStr.substring(4, 6)}/${payDateStr.substring(0, 4)}`;


            reservation.payment = {
                transactionNo: vnp_Params['vnp_TransactionNo'],
                orderId: vnp_Params['vnp_TxnRef'],
                amount: vnp_Params['vnp_Amount'] / 100,
                bankCode: vnp_Params['vnp_BankCode'],
                cardType: vnp_Params['vnp_CardType'],
                payDate: payDateFormatted
            };
            reservation.status = 'Paid';  // Update status
            await reservation.save();
        }

        if (rspCode === '00') {
            // Payment success
            return res.render('paymentSuccess', {
                title: 'Payment Success',
                message: 'Thanh toán thành công!',
                orderId: vnp_Params['vnp_TxnRef'],
                amount: vnp_Params['vnp_Amount'] / 100,
                transactionNo: transactionNo,
                bankCode: bankCode,
                cardType: cardType,
                payDate: payDateFormatted
            });
        } else {
            // Payment failed
            return res.render('paymentFailed', {
                title: 'Payment Failed',
                message: 'Thanh toán không thành công!',
                orderId: vnp_Params['vnp_TxnRef'],
                responseCode: rspCode
            });
        }
    } else {
        return res.send('Invalid signature');
    }
});



// IPN URL route - server to server confirmation
router.get('/vnpay_ipn', (req, res) => {
    let vnp_Params = req.query;
    const secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    const sortedEntries = Object.entries(vnp_Params)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    const sp = new URLSearchParams();
    for (const [key, value] of sortedEntries) {
        sp.append(key, value.toString());
    }

    const signData = sp.toString();
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    if (secureHash === signed) {
        // Update order/reservation status here if needed
        return res.status(200).json({ RspCode: '00', Message: 'Success' });
    } else {
        return res.status(200).json({ RspCode: '97', Message: 'Invalid signature' });
    }
});


module.exports = router;
