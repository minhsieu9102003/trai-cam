if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Campground = require('../models/campground.js')
const session = require('express-session')
const flash = require('connect-flash')
const Review = require('../models/review.js')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const catchAsync = require('../utils/catchAsync.js') //async function error handler
const ExpressError = require('../utils/ExpressError.js') //error class 
const { campgroundSchema, reviewSchema } = require('../campgroundSchema.js')//server-side validating schema - build in with JOI


const userRoutes = require('../routes/users.js')
const campgroundRoutes = require('../routes/campgrounds.js')
const reviewRoutes = require('../routes/reviews.js')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/user.js')

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))


const sessionConfig = {
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

mongoose.connect('mongodb://127.0.0.1:27017/camp')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('databased connected')
})

app.use(session(sessionConfig))
app.use(flash())


app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.currentUser = req.user
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

app.get('/fakeUser', async (req, res) => {
    const user = new User({ email: 'minhdeptrai@gmail.com', username: 'minh' })
    const newUser = await User.register(user, '123123sa')
    res.send(newUser)
})


app.use('/', userRoutes)
app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/review', reviewRoutes)


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

app.listen(3000, () => {
    console.log('Serving on port 3000')
})