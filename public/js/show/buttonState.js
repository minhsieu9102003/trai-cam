let showUpdateTl1 = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .2 } })
let showUpdateTl2 = gsap.timeline({ defaults: { ease: "power4.inOut", duration: .2 } })

const showUpdateFilter1 = document.querySelector('.show__update-filter-1')
const showUpdateFilter2 = document.querySelector('.show__update-filter-2')
let showUpdateFilter1Status = true
let showUpdateFilter2Status = false

showUpdateTl1
    .to(showUpdateFilter1, {
        color: 'black',
        borderBottom: '1px solid black',
    })
    .to(showUpdateFilter2, {
        color: 'grey',
        borderBottom: '1px solid transparent',
    }, '<')
showUpdateTl2
    .to(showUpdateFilter1, {
        color: 'grey',
        borderBottom: '1px solid transparent',
    })
    .to(showUpdateFilter2, {
        color: 'black',
        borderBottom: '1px solid black',
    }, '<')
showUpdateTl1.paused(true)
showUpdateTl2.paused(true)



showUpdateFilter1.addEventListener('click', async (e) => {
    if (!showUpdateFilter1Status) {
        // localStorage.setItem('filterState', 'description');
        showUpdateTl1.play()
        showUpdateTl2.reverse()
        showUpdateFilter1Status = true
        showUpdateFilter2Status = false
        await toggleVisibility()
    }



})
showUpdateFilter2.addEventListener('click', async (e) => {
    if (!showUpdateFilter2Status) {
        // localStorage.setItem('filterState', 'review');
        showUpdateTl2.play()
        showUpdateTl1.reverse()
        showUpdateFilter1Status = false
        showUpdateFilter2Status = true
        await toggleVisibility()
    }
})

// const savedState = localStorage.getItem('filterState') || 'description';
// toggleVisibility(savedState === 'review');
let detailContainerParagraph = document.querySelector('.detail-container__paragraph')
if (document.querySelector('.detail-container__star-form')) {
    var starForm = document.querySelector('.detail-container__star-form')
    var starFormExist = true
}
let review = document.querySelector('.review')

async function toggleVisibility() {
    if (showUpdateFilter2Status) {
        detailContainerParagraph.style.display = 'none'
        if (starFormExist) {
            starForm.style.display = 'flex'
        }
        review.style.display = 'flex'

    } else {
        detailContainerParagraph.style.display = 'block'
        if (starFormExist) {
            starForm.style.display = 'none'
        }
        review.style.display = 'none'
    }

}


toggleVisibility()