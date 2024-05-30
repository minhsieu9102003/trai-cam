//nav user dropdown animation
const navigationUser = document.querySelector('.navigation__user-img')
const loggedIn = document.body.getAttribute('data-logged-in') === 'true';
const userMenuHeight = loggedIn ? '240px' : '240px';

let navAvtStatus = false

const navAvtTl = gsap.timeline({
    defaults:
    {
        duration: .6,
        ease: 'power4.inOut'
    }
})

navAvtTl.to('.navigation__user-list', {
    height: userMenuHeight
})

navAvtTl.paused(true)

navigationUser.addEventListener('click', () => {
    if (!navAvtStatus) {
        navAvtTl.play()
        navAvtStatus = true
    }
    else {
        navAvtTl.reverse()
        navAvtStatus = false
    }
})