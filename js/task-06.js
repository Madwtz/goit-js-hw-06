const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  const enteredLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));

  if (enteredLength === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});