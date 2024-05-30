//for show page, expand description script
// Check if the element exists before proceeding
const showExpandButton = document.querySelector('.read-more');
if (showExpandButton) {
    let isExpanded = false; // Track whether the content is expanded
    const descriptionBox = document.querySelector('.detail-container__paragraph-container');

    function toggleDescription() {
        if (!isExpanded) {

            gsap.to(descriptionBox, {
                height: 'auto',
                duration: 0.4,
                ease: "power4.inOut"
            });
            gsap.to(showExpandButton, {
                rotate: 270,
                duration: 0.2,
                ease: "power4.inOut"
            });
        } else {

            gsap.to(descriptionBox, {
                height: '30rem',
                duration: 0.4,
                ease: "power4.inOut"
            });
            gsap.to(showExpandButton, {
                rotate: 90,
                duration: 0.2,
                ease: "power4.inOut"
            });
        }
        isExpanded = !isExpanded;
    }

    showExpandButton.addEventListener('click', toggleDescription);
}