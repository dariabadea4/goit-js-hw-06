"use strict";
const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
  const expectedLength = Number(validationInput.getAttribute('data-length'));
  if (validationInput.value.length === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});