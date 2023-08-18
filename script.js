function validateInputs() {
    const inputWrappers = document.querySelectorAll('.input-wrapper');
  
    inputWrappers.forEach(inputWrapper => {
      const input = inputWrapper.previousElementSibling;
      const errorMessage = inputWrapper.querySelector('.error-message');
      const errorIcon = inputWrapper.querySelector('.error-icon');
  
      if (!input.value) {
        inputWrapper.classList.add('error-visible');
        errorIcon.style.display = 'block';
      } else {
        inputWrapper.classList.remove('error-visible');
        errorIcon.style.display = 'none';
      }
    });
  }
  