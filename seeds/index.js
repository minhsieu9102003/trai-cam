
const path = require('path')
const mongoose = require('mongoose')
const Campground = require('../models/campground')
const updatedData = require('./cities')
const { places, descriptors } = require('./seedHelpers')


mongoose.connect('mongodb://127.0.0.1:27017/camp')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('databased connected')
})



const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {

    // for (let i = 0; i < 200; i++) {
    //     const random1000 = Math.floor(Math.random() * 50)
    //     const campLocation = [updatedData[random1000].city, updatedData[random1000].admin_name].join(', ')
    //     const camp = new Campground({
    //         title: `${sample(descriptors)} ${sample(places)}`,
    //         location: campLocation,
    //         author: ['661cbc86fe841dd2f14f75dc'],

    //         price: 100000,
    //         description: 'Nằm trong lòng thung lũng Mộc Châu yên bình, Cắm Trại Mộc Châu là điểm đến lý tưởng cho những ai muốn tận hưởng không khí trong lành của núi rừng Tây Bắc. Tại đây, du khách có thể thả mình vào không gian yên bình của thiên nhiên, ngắm nhìn những cánh đồng hoa mênh mông và thưởng thức đặc sản vùng cao. Đồng thời, các hoạt động như trekking, cưỡi ngựa và thăm các bản làng dân tộc vùng cao cũng sẽ mang lại những trải nghiệm đáng nhớ.'
    //         , image: [
    //             {
    //                 url: 'https://res.cloudinary.com/djpqndmff/image/upload/v1713798462/TraiCam/ttcxdlpdjg9ayb9n6b1z.jpg',
    //                 filename: 'TraiCam/ttcxdlpdjg9ayb9n6b1z',

    //             },
    //             {
    //                 url: 'https://res.cloudinary.com/djpqndmff/image/upload/v1713798462/TraiCam/vr5kgeg76bjtcll52qws.jpg',
    //                 filename: 'TraiCam/vr5kgeg76bjtcll52qws',

    //             },
    //             {
    //                 url: 'https://res.cloudinary.com/djpqndmff/image/upload/v1713798461/TraiCam/txqz8yn5yx0ixzdm0ify.jpg',
    //                 filename: 'TraiCam/txqz8yn5yx0ixzdm0ify',

    //             },
    //             {
    //                 url: 'https://res.cloudinary.com/djpqndmff/image/upload/v1713798460/TraiCam/q45ymvn0caytwvpdhqww.jpg',
    //                 filename: 'TraiCam/q45ymvn0caytwvpdhqww',

    //             },
    //             {
    //                 url: 'https://res.cloudinary.com/djpqndmff/image/upload/v1713798463/TraiCam/fxqmhbpdxrffww4oxacl.jpg',
    //                 filename: 'TraiCam/fxqmhbpdxrffww4oxacl',

    //             }
    //         ],
    //         geometry: {
    //             type: 'Point',
    //             coordinates: [
    //                 `${updatedData[random1000].lng}`,
    //                 `${updatedData[random1000].lat}`
    //             ]
    //         }
    //     })
    // await camp.save()
}
// }

seedDB().then(() => {
    mongoose.connection.close()
})