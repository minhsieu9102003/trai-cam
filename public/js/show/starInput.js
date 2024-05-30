document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.form__star')
    const ratingInput = document.querySelector('.form__star-input')
    const currentRatingDisplay = document.getElementById('current-rating')

    let currentRating = 0
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            highlightStars(index)
            currentRatingDisplay.textContent = 'Rating: ' + (index + 1)
        })

        star.addEventListener('click', () => {
            currentRating = index + 1
            updateRating(currentRating)

        })
        star.addEventListener('mouseleave', () => {
            if (currentRating === 0 || index + 1 > currentRating) {
                star.style.fill = '#B7B7B7'
            }
            currentRatingDisplay.textContent = 'Rating: ' + currentRating
        })
    })

    function updateRating(value) {
        ratingInput.value = value

        highlightStars(value - 1)
        currentRatingDisplay.textContent = 'Rating: ' + value
    }
    function highlightStars(index) {
        stars.forEach((star, idx) => {
            if (idx <= index) {
                star.style.fill = 'rgb(239,216,47)'
            }
            else {
                star.style.fill = '#B7B7B7  '
            }
        })
    }
})