let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');

decrementButton.addEventListener('click', function() {
  counterValue--; 
  valueSpan.textContent = counterValue; 
});
incrementButton.addEventListener('click', function() {
  counterValue++; 
  valueSpan.textContent = counterValue; 
});
