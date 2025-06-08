let memory = null; // Use null to signify no memory stored
let initialMemory = null; // Store the initial memory value separately
let memoryHistory = []; // Array to store history of equations and memory
let memoryStorage = 0;

function memoryClear() {
    memory = null; // Reset to null
    initialMemory = null; // Reset initialMemory to null
    memoryHistory = [];
    updateMemoryHistory();
    memoryStorage = 0;
    console.log('Memory cleared');
}

function memoryRecall() {
    if (initialMemory !== null) {
        memory = initialMemory; // Recall the initial memory value
        document.querySelector('.calculator__result-primary').value = memory;
        document.querySelector('.calculator__result-secondary').value = memory;
        document.querySelector('.calculator__result-secondary').style.visibility = 'visible';
        // Trigger calculation update
        updateCalculation(memory);
    }
}

function memoryAdd() {
    const currentValue = parseFloat(document.querySelector('.calculator__result-primary').value.replace(/,/g, '')) || 0;
    if (initialMemory !== null) {
        memory = initialMemory + currentValue;
        document.querySelector('.calculator__result-primary').value = memory; // Display the result
        document.querySelector('.calculator__result-secondary').value = initialMemory; // Retain the initial memory value
        document.querySelector('.calculator__result-secondary').style.visibility = 'visible';
        memoryHistory.unshift(memory);
        updateMemoryHistory();
    }
}

function memorySubtract() {
    const primaryDisplay = document.querySelector('.calculator__result-primary');
    const secondaryDisplay = document.querySelector('.calculator__result-secondary');
    const primaryValue = parseFloat(primaryDisplay.value.replace(/,/g, '')) || 0;
    
    // Show the memory stored first
    secondaryDisplay.value = initialMemory;
    secondaryDisplay.style.visibility = 'visible';

    // Perform the subtraction
    const result = (initialMemory || 0) - primaryValue;
    primaryDisplay.value = result; // Display the result
    memoryHistory.unshift(result);
    updateMemoryHistory();
}

function memoryStore() {
    const currentValue = parseFloat(document.querySelector('.calculator__result-primary').value.replace(/,/g, ''));
    if (!isNaN(currentValue)) {
        memory = currentValue;
        initialMemory = currentValue; // Store the initial memory value
        if (memoryHistory.length === 0 || memoryHistory[0] !== memory) {
            memoryHistory.unshift(memory);
        }
        document.querySelector('.calculator__result-secondary').value = memory;
        document.querySelector('.calculator__result-secondary').style.visibility = 'visible';
        updateMemoryHistory();
    }
}

function updateMemoryHistory() {
    const memoryContainer = document.getElementById("memory-history");
    memoryContainer.innerHTML = memoryHistory.map((entry, index) =>
        `<div onclick="setMemory(${index})">${entry}</div>`
    ).join('');
    memoryContainer.style.display = memoryHistory.length ? 'block' : 'none';
}

function setMemory(index) {
    memory = memoryHistory[index];
    document.querySelector('.calculator__result-primary').value = memory;
    updateCalculation(memory);
}

function toggleMemoryHistory() {
    const memoryContainer = document.getElementById("memory-history");
    if (memoryContainer.style.display === 'none' || memoryContainer.style.display === '') {
        memoryContainer.style.display = 'block';
    } else {
        memoryContainer.style.display = 'none';
    }
}

function updateCalculation(value) {
    // Update the calculation logic based on the recalled memory value
    // This function should be implemented in the relevant files (arithmetic, calculations, calculator, conversion, history)
    // For example:
    // updateArithmetic(value);
    // updateCalculations(value);
    // updateCalculator(value);
    // updateConversion(value);
    // updateHistory(value);
}

// Add event listeners for memory buttons
document.querySelector('.calculator__m-btn[data-option="MC"]').addEventListener('click', memoryClear);
document.querySelector('.calculator__m-btn[data-option="MR"]').addEventListener('click', memoryRecall);
document.querySelector('.calculator__m-btn[data-option="M+"]').addEventListener('click', memoryAdd);
document.querySelector('.calculator__m-btn[data-option="M-"]').addEventListener('click', memorySubtract);
document.querySelector('.calculator__m-btn[data-option="MS"]').addEventListener('click', memoryStore);
