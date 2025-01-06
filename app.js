// app.js

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

// Import Socket.IO and related modules
const http = require('http');
const socketIO = require('socket.io');
const sharedSession = require('express-socket.io-session');

const Campground = require('./models/campground.js')
const session = require('express-session')
const flash = require('connect-flash')
const Review = require('./models/review.js')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const catchAsync = require('./utils/catchAsync.js') //async function error handler
const ExpressError = require('./utils/ExpressError.js') //error class 
const { campgroundSchema, reviewSchema } = require('./campgroundSchema.js')//server-side validating schema - built with JOI
const dateFormat = require('dateformat');
const qs = require('qs');
const crypto = require('crypto'); // Built-in, no need to install

const userRoutes = require('./routes/users.js')
const campgroundRoutes = require('./routes/campgrounds.js')
const reviewRoutes = require('./routes/reviews.js')
const reservationRoutes = require('./routes/reservations.js');
const paymentRoutes = require('./routes/payment');
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user.js')
const Notification = require('./models/notification');
const notificationRoutes = require('./routes/notifications');
const reservationHostRoutes = require('./routes/reservationsHost');
// const messageRoutes = require('./routes/messages');

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = socketIO(server);

const vnp_TmnCode = process.env.VNP_TMNCODE;
const vnp_HashSecret = process.env.VNP_HASHSECRET;
const vnp_Url = process.env.VNP_URL;
const vnp_ReturnUrl = process.env.VNP_RETURNURL;
const vnp_IpnUrl = process.env.VNP_IPNURL;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))



// Session configuration
const sessionConfig = {
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // Use secure: true if using HTTPS
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

// Create session middleware to share with Socket.IO
const sessionMiddleware = session(sessionConfig);
app.use(sessionMiddleware);

// Share session with Socket.IO
io.use(sharedSession(sessionMiddleware, {
    autoSave: true
}));

function sortObject(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
        sorted[key] = obj[key];
    }
    return sorted;
}

mongoose.connect('mongodb://127.0.0.1:27017/camp')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Make io accessible to the app
app.set('io', io);

// app.use((req, res, next) => {
//     res.locals.currentUser = req.user
//     res.locals.success = req.flash('success')
//     res.locals.error = req.flash('error')
//     next()
// })

app.get('/fakeUser', async (req, res) => {
    const user = new User({ email: 'minhdeptrai@gmail.com', username: 'minh' })
    const newUser = await User.register(user, '123123sa')
    res.send(newUser)
})
app.use(async (req, res, next) => {
    res.locals.currentUser = req.user || null;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');

    if (req.user) {
        try {
            const notifications = await Notification.find({ user_id: req.user._id }).sort({ created_at: -1 });

            // Separate unread notifications
            const unreadNotifications = notifications.filter(notification => !notification.is_read);

            // Make notifications available in all templates
            res.locals.notifications = notifications;
            res.locals.unreadNotificationsCount = unreadNotifications.length;
        } catch (err) {
            console.error('Error fetching notifications:', err);
            res.locals.notifications = [];
        }
    } else {
        res.locals.notifications = [];
    }
    next();
});

app.use('/', userRoutes)
app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/review', reviewRoutes)
app.use('/', reservationRoutes);
app.use('/', paymentRoutes);
app.use('/', notificationRoutes);
app.use('/host', reservationHostRoutes);
// app.use('/', messageRoutes);


// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
    console.log('Session data:', socket.handshake.session);
    const session = socket.handshake.session;
    const userId = session?.passport?.user;

    if (!userId) {
        console.log('Unauthenticated socket connection attempt.');
        socket.disconnect();
        return;
    }

    socket.join(userId);
    console.log(`User ${userId} connected via Socket.IO`);
    socket.on('sendMessage', async (data) => {
        try {
            const { senderId, receiverId, content } = data;

            // Save the message to the database
            const message = new Message({
                sender: senderId,
                receiver: receiverId,
                content,
            });
            await message.save();

            // Emit the message to the receiver's room
            io.to(receiverId).emit('receiveMessage', message);
        } catch (err) {
            console.error('Error sending message:', err);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('home')
})

app.all('*', (req, res, next) => {
    next(new ExpressError('Đã có lỗi xảy ra', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err
    if (!err.message) err.message = 'Đã có lỗi xảy ra'
    res.status(statusCode).render('error/error', { err })
})

// Replace app.listen with server.listen
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`)
})
