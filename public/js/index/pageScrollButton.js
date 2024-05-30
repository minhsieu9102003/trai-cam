//top-bottom of page auto-scroll
const downButton = document.querySelector('.down-bottom')
let downTL = gsap.timeline({ defaults: { ease: "elastic.out(1,1)", duration: .4 } })


let downStatus = false

downTL.to(downButton, {
    rotate: 270,
    fill: 'white'
})

downTL.paused(true)

downButton.addEventListener('click', () => {
    if (!downStatus) {
        downTL.play()
        window.scrollTo({
            top: document.body.scrollHeight, // This represents the bottom of the page
            behavior: 'smooth' // Smooth scroll
        });
        downStatus = true
    }
    else {
        downTL.reverse()
        window.scrollTo({
            top: 0, // This represents the top of the page
            behavior: 'smooth'
        });
        downStatus = false
    }
})