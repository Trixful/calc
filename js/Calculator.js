class Calculator {
  constructor() {

    this.result = document.querySelector('.calculator__result-primary');
    this.subRes = document.querySelector('.calculator__result-secondary');
    this.numbers = [...document.querySelectorAll('[data-number]')];
    this.options = [...document.querySelectorAll('[data-option]')];
    this.operators = [...document.querySelectorAll('[data-operator]')];
    
    this.numbers.forEach(number => number.addEventListener('click', this.addNumber));
    this.options.forEach(option => option.addEventListener('click', this.addOption));
    this.operators.forEach(operator => operator.addEventListener('click', this.calculate));
    
    this.calculations = [];
    this.newNumber = false;
    this.reset = false;
    this.lastOperator = null;
    this.currentResult = 0;
    
    this.clear();
  }

  addNumber = (e) => {

    if(this.reset) this.clear();
    
    this.number = e.target.textContent;

    if(this.result.value === '0' || this.newNumber) {
      this.result.value = this.number;
    } else {
      this.result.value += this.number;
    }

    this.newNumber = false;
  }

  addOption = (e) => {
    
    this.option = e.target.dataset.option;
    this.lastChar = this.result.value[this.result.value.length - 1];
    
    if(this.option === 'dot') {
      if(this.lastChar !== '.' && !this.result.value.includes('.')) {
        this.result.value += '.';
        this.newNumber = false; // Ensure newNumber is false to append numbers after the decimal point
      }
    }
    
    else if(this.option === 'percent') {
      this.result.value = parseFloat(this.result.value) / 100;
    }
    
    else if(this.option === 'clearEntry') this.result.value = '0';
    
    else if(this.option === 'clear') this.clear();
    
    else if(this.option === 'reverse') this.result.value = this.result.value * -1;

    else if(this.option === 'undo') {

      (this.result.value.length === 1) 
        ? this.result.value = '0' 
        : this.result.value = this.result.value.substring(0, this.result.value.length - 1);
    }
  }

  calculate = (e) => {
    this.operator = e.target.dataset.operator;
    this.value = parseFloat(this.result.value);
    this.subRes.style.visibility = 'visible';

    if (isNaN(this.value)) {
      this.result.value = '0';
      return;
    }

    if(this.operator === 'pow') {
      this.subRes.value = ` sqr(${this.result.value})`;
      this.result.value = Math.pow(this.value, 2);
    } else if(this.operator === 'sqrt') {
      this.subRes.value = ` ${e.target.textContent}(${this.result.value})`;
      this.result.value = Math.sqrt(this.result.value);
    } else if(this.operator === 'fraction') {
      this.subRes.value = ` 1/(${this.result.value})`;
      this.result.value = 1 / this.result.value;
    } else if(this.operator === 'percent') {
      this.result.value = parseFloat(((this.currentResult * this.value) / 100).toPrecision(14));
    } else {
      try {
        if(this.operator === 'equal' && this.newNumber && this.lastOperator !== null && this.lastOperator !== 'equal'){
          throw new Error('Operation not finished');
        } else {
          if(this.newNumber) {
            this.lastOperator = this.operator;
            this.calculations[this.calculations.length-1] = Calculations.returnOperator(this.operator);
            this.subRes.value = this.calculations.join(' ');
            this.reset = false;
            return;
          }
          if (this.lastOperator === 'divide' && this.value === 0) {
            throw new Error('Division by zero');
          }
          this.currentResult = (this.lastOperator === null) 
            ? this.value
            : Calculations.doMath(this.currentResult, this.value, this.lastOperator);
          if(this.operator !== 'equal') {
            this.lastOperator = this.operator;
          } else {
            this.reset = true;
          }
          this.newNumber = true;
          this.calculations.push(this.value);
          this.calculations.push(Calculations.returnOperator(this.operator));
          this.currentResult = parseFloat(this.currentResult.toPrecision(14));
          this.result.value = this.currentResult;
          this.subRes.value = this.calculations.join(' ');
        }
      } catch (error) {
        alert(error.message);
        this.clear();
      }
    }
  }

  clear = () => {
    this.subRes.style.visibility = 'hidden';
    this.result.value = '0';
    this.subRes.value = '';
    this.calculations = [];
    this.newNumber = false;
    this.reset = false;
    this.lastOperator = null;
    this.currentResult = 0;
  }

  updateCalculator(value) {
    this.result.value = value;
    this.subRes.style.visibility = 'visible';
  }
}

document.querySelectorAll('.calculator__btn').forEach(button => {
  button.addEventListener('click', () => {
    const option = button.getAttribute('data-option');
    const primaryDisplay = document.querySelector('.calculator__result-primary');
    const secondaryDisplay = document.querySelector('.calculator__result-secondary');
    let currentValue = parseInt(secondaryDisplay.value.replace(/,/g, ''), 10) || parseInt(primaryDisplay.value.replace(/,/g, ''), 10);

    if (!isNaN(currentValue)) {
      switch (option) {
        case 'plus':
        case 'minus':
        case 'multiply':
        case 'divide':
          if (primaryDisplay.value === '') {
            throw new Error('Operation not finished');
          }
          // ...existing code...
          break;
        case 'equal':
          if (primaryDisplay.value === '') {
            throw new Error('Operation not finished');
          }
          // ...existing code...
          break;
        // ...existing code...
      }
    }
  });
});

function updateCalculation(value) {
  const calculator = new Calculator();
  calculator.updateCalculator(value);
}