// // controllers/messages.js
// const Message = require('../models/message'); // Import Message model

// module.exports.sendMessage = async (req, res) => {
//     try {
//         const { receiverId, content } = req.body; // Get data from the request body
//         const senderId = req.user._id; // Get the logged-in user's ID

//         // Save the message to the database
//         const message = new Message({
//             sender: senderId,
//             receiver: receiverId,
//             content,
//         });
//         await message.save();

//         // Emit the message to the receiver's room via Socket.IO
//         const io = req.app.get('io'); // Access the io instance from the app
//         io.to(receiverId).emit('receiveMessage', message);

//         res.status(200).json({ message: 'Message sent successfully', data: message });
//     } catch (err) {
//         console.error('Error sending message:', err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };
