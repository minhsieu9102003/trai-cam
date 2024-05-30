const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require('./review')



const CampgroundImage = new Schema({
    url: String,
    filename: String
})

CampgroundImage.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200')
})

const opts = { toJSON: { virtuals: true } }

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: [CampgroundImage],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: ['Number'],
            required: true
        }
    },
    review: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
}, opts)


CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <a class= 'index__map-popup' href='campgrounds/${this._id}' style='text-decoration: none'>
    <h3 style='text-decoration: none;color: black; font-size: 1.1rem; font-weight: 800'>${this.title} </h3>
    <p style='text-decoration: none; color: black'>${this.location}<p>
    <p style='text-decoration: none; color: gray'>${this.price}VND/Đêm<p>
    <img style='width: 100%; height: 100%'src=${this.image[0].url}>
    </a>
    
    `
})

CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.review
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema)