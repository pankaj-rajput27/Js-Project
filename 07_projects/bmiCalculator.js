const form = document.querySelector('#bmi-form');
const resultText = document.querySelector('#bmi-value');

const underweightItem = document.getElementById('underweight');
const normalItem = document.getElementById('normal');
const overweightItem = document.getElementById('overweight');

function clearHighlights() {
  underweightItem.classList.remove('highlight');
  normalItem.classList.remove('highlight');
  overweightItem.classList.remove('highlight');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  if (isNaN(height) || height <= 0) {
    resultText.innerText = 'Please enter a valid height.';
    clearHighlights();
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    resultText.innerText = 'Please enter a valid weight.';
    clearHighlights();
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  resultText.innerText = bmi;

  clearHighlights();

  if (bmi < 18.6) {
    underweightItem.classList.add('highlight');
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    normalItem.classList.add('highlight');
  } else {
    overweightItem.classList.add('highlight');
  }
});
