document.querySelectorAll('.calculator__btn').forEach(button => {
  button.addEventListener('click', () => {
    const option = button.getAttribute('data-option');
    const primaryDisplay = document.querySelector('.calculator__result-primary');
    const secondaryDisplay = document.querySelector('.calculator__result-secondary');
    let currentValue = primaryDisplay.value ? parseFloat(primaryDisplay.value.replace(/,/g, '')) : NaN;

    if (!isNaN(currentValue)) {
      switch (option) {
        case 'convertBinary':
          secondaryDisplay.value = currentValue.toString(2);
          secondaryDisplay.style.visibility = 'visible';
          break;
        case 'convertHex':
          secondaryDisplay.value = currentValue.toString(16).toUpperCase();
          secondaryDisplay.style.visibility = 'visible';
          break;
        case 'convertOctal':
          secondaryDisplay.value = currentValue.toString(8);
          secondaryDisplay.style.visibility = 'visible';
          break;
        case 'revertDecimal':
          secondaryDisplay.value = currentValue.toString();
          secondaryDisplay.style.visibility = 'visible';
          break;
      }
    }
  });
});

function updateConversion(value) {
  const primaryDisplay = document.querySelector('.calculator__result-primary');
  const secondaryDisplay = document.querySelector('.calculator__result-secondary');
  primaryDisplay.value = value;
  secondaryDisplay.style.visibility = value ? 'visible' : 'hidden';
}

function updateCalculation(value) {
  updateConversion(value);
}