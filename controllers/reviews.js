const Campground = require('../models/campground')
const Review = require('../models/review')



module.exports.create = async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    const review = new Review(req.body.review)
    review.author = req.user._id
    campground.review.push(review)
    await review.save()
    await campground.save()
    req.flash('success', 'Đăng đánh giá thành công')
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.delete = async (req, res) => {
    const { id, reviewId } = req.params
    await Campground.findByIdAndUpdate(id, { $pull: { review: reviewId } })
    await Review.findOneAndDelete(reviewId)
    req.flash('success', 'Xóa đánh giá thành công')
    res.redirect(`/campgrounds/${id}`)

}