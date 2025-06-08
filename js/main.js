document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
  memoryClear(); // Initialize memory storage
  // ...existing code...
  document.querySelector('.calculator__m-btn[data-option="MR"]').addEventListener('click', () => {
    memoryRecall();
  });
});

