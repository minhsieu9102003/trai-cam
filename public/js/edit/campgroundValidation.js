//client-side form validating


document.addEventListener('DOMContentLoaded', function () {
    try {
        bsCustomFileInput.init()
        class FormValidator {
            constructor(selector) {
                this.form = document.querySelector(selector);
                if (!this.form) return; // If form doesn't exist, exit the constructor
                this.inputsWithErrors = new Set(); //kind of like an array
                this.maxPrice = 1000000000000
                this.form.addEventListener("submit", e => {
                    e.preventDefault();
                    this.validateAllInputs(); // Validate all inputs on submit
                    if (!this.hasErrors) {
                        this.form.submit();
                    }
                });

                const priceInput = this.form.querySelector('#price');
                if (priceInput) {
                    priceInput.addEventListener('input', () => {
                        let value = parseFloat(priceInput.value);
                        if (value > this.maxPrice) {
                            priceInput.value = this.maxPrice; // Reset value to maxPrice if exceeded
                        }
                    });
                }
            }

            get hasErrors() {
                return this.inputsWithErrors.size > 0;
            }

            register(selector, check) {
                const inputField = this.form.querySelector(selector);
                if (!inputField) return; // If inputField doesn't exist, exit the method
                const errorElement = inputField.closest(".input").querySelector(".input__error");
                //basically selecting the error message element

                const execute = (hideErrors) => {
                    const { pass, error } = check(inputField.value, inputField);

                    if (!hideErrors) {
                        errorElement.textContent = error || "";
                    }

                    if (!pass) {
                        this.inputsWithErrors.add(inputField);
                    } else {
                        this.inputsWithErrors.delete(inputField);
                    }
                };

                inputField.addEventListener("change", () => execute());
                execute(true);
            }

            validateAllInputs() {
                const inputs = this.form.querySelectorAll("input, textarea");
                inputs.forEach(input => {
                    const errorElement = input.nextElementSibling;//the error message
                    input.addEventListener('input', () => {
                        if (this.inputsWithErrors.has(input)) {
                            input.classList.remove("input--error"); // Remove error highlighting
                            errorElement.textContent = ""; // Clear error message
                            this.inputsWithErrors.delete(input); // Remove from error set if immediate feedback desired
                        }
                    });

                    if (input.value.trim() === "") {
                        // If input is empty, mark it as error
                        input.classList.add("input--error"); // Highlight input
                        errorElement.textContent = "Vui lòng nhập giá trị";
                        this.inputsWithErrors.add(input);
                    } else if (input.id === 'price') {
                        const value = parseFloat(input.value);
                        if (isNaN(value) || value <= 1000 || input.value.includes('.') || input.value.includes('-')) {
                            input.classList.add("input--error");
                            errorElement.textContent = "Vui lòng nhập giá trị (số lớn hơn 1000, không chứa ký tự đặc biệt)";
                            this.inputsWithErrors.add(input);
                        }

                    } else {
                        input.classList.remove("input--error");
                        if (errorElement) {
                            errorElement.textContent = ""; // or other manipulations
                        } else {
                            console.error("Error element not found for input", input);
                        }
                        this.inputsWithErrors.delete(input);
                    }
                });
            }
        }

        // Initialization with form selector
        const fv = new FormValidator(".new");
        window.fv = fv; // Make it available globally if needed
    } catch (error) {
        console.error("Form validation setup error:", error);
    }
});