document.addEventListener('DOMContentLoaded', function () {

    class FormValidator {
        constructor(selector) {
            this.form = document.querySelector(selector);
            if (!this.form) return; // Exit if no form is found with the selector
            this.inputsWithErrors = new Set(); // Tracks inputs with validation errors

            this.form.addEventListener("submit", e => {
                e.preventDefault(); // Prevent default form submission
                this.validateAllInputs(); // Validate all form inputs
                if (this.inputsWithErrors.size === 0) {
                    this.form.submit(); // Submit form if no validation errors
                }
            });
            this.setupInputEventListeners(); // Setup listeners for input validation
        }

        setupInputEventListeners() {
            const inputs = this.form.querySelectorAll("input, textarea");
            inputs.forEach(input => {
                input.addEventListener('input', () => this.validateInput(input));
            });
            const stars = document.querySelectorAll('.form__star')
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const value = star.getAttribute('data-value')
                    document.querySelector('.form__star-input').value = value
                    this.validateInput(document.querySelector('.form__star-input'))
                })
            })
        }



        validateInput(input) {
            let errorElement = input.nextElementSibling;
            if (!errorElement || errorElement.className !== 'input__error') {
                errorElement = document.createElement('div');
                errorElement.className = 'input__error';
                input.parentNode.insertBefore(errorElement, input.nextSibling);
            }

            // Reset error state
            input.classList.remove("input__error");
            errorElement.textContent = "";

            // Check input value and add error if necessary
            if (input.type === 'hidden') {
                const value = parseInt(input.value, 10)
                if (value < 1 || value > 5 || isNaN(value)) {
                    input.classList.add('input__error')
                    errorElement.textContent = 'Vui lòng chọn số sao đánh giá'
                    this.inputsWithErrors.add(input)
                }
                else this.inputsWithErrors.delete(input)
            }

            else if (input.type === 'textarea') {
                if (input.value.trim() === "") {
                    input.classList.add("input__error");
                    errorElement.textContent = 'Vui lòng viết bình luận'
                    this.inputsWithErrors.add(input);
                } else {
                    this.inputsWithErrors.delete(input);
                }
            }
        }

        validateAllInputs() {
            const inputs = this.form.querySelectorAll("input, textarea");
            inputs.forEach(input => this.validateInput(input));
        }
    }

    // Initialize the form validator for the form
    new FormValidator(".detail-container__star-form");
});