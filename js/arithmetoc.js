function handleArithmeticOperator(operator) {
  display.value += operator;
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/x/g, '*'));
  } catch (e) {
    display.value = 'Error';
  }
}

function updateArithmetic(value) {
  const display = document.querySelector('.calculator__result-primary');
  display.value = value;
}

function updateCalculation(value) {
  updateArithmetic(value);
}

// Contents from calculations.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}