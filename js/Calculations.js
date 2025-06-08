class Calculations {
  static doMath = (currentResult = null, value = null, operator = null) => {
    if (currentResult === null || value === null) {
      throw new Error('Operation not finished');
    }
    switch(operator) {
      case 'plus':
        return currentResult + value;
      case 'minus':
        return currentResult - value;
      case 'multiply':
        return currentResult * value;
      case 'divide':
        if (value === 0) {
          throw new Error('Division by zero');
        }
        return currentResult / value;
      default:
        throw new Error('Invalid operator');
    }
  }

  static returnOperator = (operator = null) => {
    switch(operator) {
      case 'plus':
        return '+';
      case 'minus':
        return '−';
      case 'multiply':
        return '×';
      case 'divide':
        return '÷';
      case 'equal':
        return '=';
      default:
        throw new Error('Invalid operator');
    }
  }
}

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

function returnOperator(operator) {
  switch (operator) {
      case '+':
          return '+';
      case '-':
          return '-';
      case '*':
          return '*';
      case '/':
          return '/';
      default:
          return '';
  }
}

function doMath(a, b, operator) {
  switch (operator) {
      case '+':
          return add(a, b);
      case '-':
          return subtract(a, b);
      case '*':
          return multiply(a, b);
      case '/':
          return divide(a, b);
      default:
          return 0;
  }
}

function updateCalculations(value) {
  const display = document.querySelector('.calculator__result-primary');
  display.value = value;
}

function updateCalculation(value) {
  updateCalculations(value);
}


