"use strict";
let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');
const updateValue = () => {
  valueSpan.textContent = counterValue;
};
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateValue();
});
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateValue();
});