//hover effect on footer's links

const leftLink = gsap.utils.toArray('.footer__url-main')
const rightLink = gsap.utils.toArray('.footer__link')


rightLink.forEach(link => {
    let linkTl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .4 } })

    const dashLine = link.nextElementSibling

    linkTl
        .to(dashLine, {
            transform: 'scaleX(1)',
            transformOrigin: 'left'
        })
        .to(link, {
            transform: 'translateY(-3px)'
        }, '-=.4')

    linkTl.pause()

    link.addEventListener('mouseenter', () => {
        linkTl.play()
    })
    link.addEventListener('mouseleave', () => {
        linkTl.reverse()
    })

})

leftLink.forEach(link => {
    let linkTl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .4 } })

    const dashLine = link.nextElementSibling

    linkTl
        .to(dashLine, {
            transform: 'scaleX(1)',
            transformOrigin: 'left'
        })
        .to(link, {
            transform: 'translateY(-3px)'
        }, '-=.4')

    linkTl.pause()

    link.addEventListener('mouseenter', () => {
        linkTl.play()
    })
    link.addEventListener('mouseleave', () => {
        linkTl.reverse()
    })

})