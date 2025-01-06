// controllers/vnpay.js
const crypto = require('crypto');
const Order = require('../models/order');
const Reservation = require('../models/reservation');

module.exports.vnpayReturn = async (req, res) => {
    try {
        // Log the full request query received from VNPay for debugging
        console.log("Received VNPay parameters:", req.query);

        // Extract and remove secure hash from VNPay's params
        const vnp_Params = req.query;
        const vnp_SecureHash = vnp_Params['vnp_SecureHash'];

        // Remove secure hash and secure hash type from params for signing
        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        // Sort parameters
        const sortedParams = Object.keys(vnp_Params)
            .sort()
            .reduce((result, key) => {
                result[key] = vnp_Params[key];
                return result;
            }, {});

        // Build the string to be hashed
        const signData = Object.entries(sortedParams)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        // Generate HMAC-SHA512 hash
        const secretKey = process.env.VNP_HASHSECRET;
        const hmac = crypto.createHmac('sha512', secretKey);
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

        // Log each part of the signing process
        console.log("Sorted parameters:", sortedParams);
        console.log("Data string for hashing:", signData);
        console.log("Generated Secure Hash:", signed);
        console.log("VNPay Provided Secure Hash:", vnp_SecureHash);

        // Signature verification
        if (vnp_SecureHash === signed) {
            // Process transaction based on vnp_ResponseCode
            const orderId = vnp_Params['vnp_TxnRef'];
            const order = await Order.findOne({ orderId });

            if (order) {
                if (vnp_Params['vnp_ResponseCode'] === '00') {
                    order.status = 'Paid';
                    await order.save();

                    const reservation = await Reservation.findById(order.reservation);
                    if (reservation) {
                        reservation.status = 'Confirmed';
                        await reservation.save();
                    }

                    res.render('paymentSuccess', {
                        title: 'Payment Success',
                        message: 'Your payment was successful!',
                        orderId: orderId,
                        amount: vnp_Params['vnp_Amount'] / 100,
                        transactionNo: vnp_Params['vnp_TransactionNo'],
                        bankCode: vnp_Params['vnp_BankCode'],
                        time: vnp_Params['vnp_PayDate']
                    });
                } else {
                    order.status = 'Failed';
                    await order.save();

                    res.render('paymentFailed', {
                        title: 'Payment Failed',
                        message: 'Your payment was not successful. Please try again.',
                        orderId: orderId,
                        responseCode: vnp_Params['vnp_ResponseCode'],
                        responseMessage: 'Transaction failed'
                    });
                }
            } else {
                res.render('paymentFailed', {
                    title: 'Payment Failed',
                    message: 'Order not found.',
                    orderId: vnp_Params['vnp_TxnRef']
                });
            }
        } else {
            // Log error for mismatched signature
            console.error("Signature mismatch. Generated hash:", signed, "Received hash:", vnp_SecureHash);

            res.render('paymentFailed', {
                title: 'Payment Failed',
                message: 'Invalid signature. The payment could not be verified.',
                orderId: vnp_Params['vnp_TxnRef']
            });
        }
    } catch (error) {
        console.error("Internal Error:", error);
        res.status(500).send('Internal Server Error');
    }
};
