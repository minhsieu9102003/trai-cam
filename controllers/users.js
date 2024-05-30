const User = require('../models/user')
const Campground = require('../models/campground')

module.exports.register = (req, res) => {
    res.render('users/register')
}

module.exports.registerIn = async (req, res, next) => {
    try {
        const { email, username, password } = req.body
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, (err) => {
            if (err) return next(err)

            req.flash('success', 'Chào mừng bạn')
            res.redirect('/campgrounds')

        })

    } catch (e) {
        req.flash('error', 'đã có lỗi xảy ra')
        res.redirect('register')
    }


}
module.exports.registerRedirect = (req, res) => {
    if (req.user && req.user.username === 'admin') {
        req.flash('success', 'Chào mừng Admin quay trở lại')
        return res.redirect('/admin')
    }
    req.flash('success', 'Chào mừng bạn quay trở lại')
    const redirectUrl = res.locals.returnTo || '/campgrounds'
    res.redirect(redirectUrl)
}

module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Đăng xuất thành công');
        res.redirect('/campgrounds');
    });
}

module.exports.admin = async (req, res) => {
    const campgrounds = await Campground.find({}).populate('author')
    const users = await User.find({})
    res.render('users/admin', { campgrounds, users })
}


module.exports.deleteUser = async (req, res) => {
    const { id } = req.params
    // Find all campgrounds authored by the user and delete them
    await Campground.deleteMany({ author: id })
    // Delete the user
    await User.findByIdAndDelete(id)
    req.flash('success', 'User and associated campgrounds deleted successfully')
    res.redirect('/admin')
}

module.exports.renderEditUserForm = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
        req.flash('error', 'User not found')
        return res.redirect('/admin')
    }
    res.render('users/edit', { user })
}

// Update user
module.exports.updateUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body.user, { new: true, runValidators: true })
    req.flash('success', 'User updated successfully')
    res.redirect('/admin')
}