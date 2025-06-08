function updateHistory(value) {
  const display = document.querySelector('.calculator__result-primary');
  display.value = value;
  formatDisplay();
}

function updateCalculation(value) {
  updateHistory(value);
}

// function addToHistory(expression, result) {
//     const historyContainer = document.getElementById("calculation-history");
//     const historyEntry = document.createElement("div");
//     historyEntry.textContent = `${expression} = ${result}`;
//     historyEntry.onclick = () => {
//         display.value = result;
//         secondaryDisplay.value = expression;
//     };
//     historyContainer.prepend(historyEntry);
// }

// function useHistory(expression) {
//     display.value = expression;
//     formatDisplay();
// }
