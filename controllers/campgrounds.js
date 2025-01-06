const Campground = require('../models/campground')
const Reservation = require('../models/reservation');
const { cloudinary } = require('../cloudinary')
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapBoxToken = process.env.MAPBOX_TOKEN
const geocoder = mbxGeocoding({ accessToken: mapBoxToken })


module.exports.index = async (req, res) => {
    // const campgrounds = await Campground.find({}).populate('review')
    // res.render('campgrounds/index', { campgrounds })

    let campgrounds;
    let reservations = [];
    // if (req.user.role === 'seller') {
    //     // Find campgrounds created by buyers
    //     campgrounds = await Campground.find({ author: req.user._id }).populate('author').populate('review');
    //     res.render('campgrounds/sellerIndex', { campgrounds });
    // } else {
    //     // Find all campgrounds
    //     campgrounds = await Campground.find({}).populate('author').populate('review');
    //     res.render('campgrounds/index', { campgrounds });
    // }
    if (req.user.role === 'seller') {
        // Find campgrounds created by the seller
        campgrounds = await Campground.find({ author: req.user._id })
            .populate('author')
            .populate({
                path: 'review',
                populate: { path: 'author' }  // This ensures nested population of review author
            })
            .populate('reservations')

        // Fetch reservations for all campgrounds owned by the seller
        for (let campground of campgrounds) {
            const campgroundReservations = await Reservation.find({ campground: campground._id }).populate('user').populate('campground');
            reservations = reservations.concat(campgroundReservations);
        }

        res.render('campgrounds/sellerIndex', { campgrounds, reservations });
    } else {
        // Find all campgrounds
        campgrounds = await Campground.find({}).populate('author').populate('review').populate('reservations');
        res.render('campgrounds/index', { campgrounds });
    }
}

module.exports.new = (req, res) => {

    res.render('campgrounds/new')
}


module.exports.createCamp = async (req, res, next) => {
    try {
        const geoData = await geocoder.forwardGeocode({
            query: req.body.campground.location,
            limit: 3
        }).send()
        const rand = Math.floor(Math.random() * geoData.body.features.length)
        const campground = new Campground(req.body.campground)
        campground.geometry = geoData.body.features[rand].geometry
        campground.image = req.files.map(f => ({ url: f.path, filename: f.filename }))
        campground.author = req.user._id

        await campground.save()
        req.flash('success', 'Thêm trại thành công')
        console.log(campground.image)
        res.redirect(`/campgrounds/${campground._id}`)
    } catch (e) {
        console.error(e)
        next(e)
    }
}
// module.exports.makeReservation = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { reservation } = req.body;
//         const campground = await Campground.findById(id);

//         if (!campground) {
//             req.flash('error', 'Cannot find that campground!');
//             return res.redirect('/campgrounds');
//         }

//         if (reservation.numberOfPeople > campground.capacity) {
//             req.flash('error', 'The number of people exceeds the campground capacity!');
//             return res.redirect(`/campgrounds/${id}`);
//         }

//         const newReservation = new Reservation({
//             campground: id,
//             user: req.user._id,
//             numberOfPeople: reservation.numberOfPeople,
//             checkIn: reservation.checkIn,
//             checkOut: reservation.checkOut,
//             note: reservation.note,
//             paymentMethod: reservation.paymentMethod
//         });

//         await newReservation.save();

//         // Notify the campground author (seller)
//         req.flash('success', 'Reservation made successfully. The seller has been notified.');
//         res.redirect(`/campgrounds/${id}`);
//     } catch (e) {
//         console.error(e);
//         next(e);
//     }
// };


module.exports.show = async (req, res) => {

    const campground = await Campground.findById(req.params.id).populate({ path: 'review', populate: { path: 'author' } }).populate('author').populate('reservations')
    if (!campground) {
        req.flash('error', 'Trại không tồn tại')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show', { campground })
}


module.exports.edit = async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    if (!campground) {
        req.flash('error', 'Trại không tồn tại')
        return res.redirect('/campgrounds')
    }


    res.render('campgrounds/edit', { campground })
}

module.exports.updateCamp = async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground }, { new: true, runValidators: true })
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }))
    campground.image.push(...imgs)
    const geoData = await geocoder.forwardGeocode({
        query: campground.location,
        limit: 1
    }).send()

    campground.geometry = geoData.body.features[0].geometry
    await campground.save()
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            cloudinary.uploader.destroy(filename)
        }
        await campground.updateOne({ $pull: { image: { filename: { $in: req.body.deleteImages } } } })
    }
    req.flash('success', 'Cập nhật trại thành công')
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.delete = async (req, res) => {
    const { id } = req.params
    await Campground.findByIdAndDelete(id)
    req.flash('success', 'Xóa trại thành công')
    res.redirect(`/campgrounds`)

}