const display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
  display.textContent += value;
}

// Clear the display
function clearDisplay() {
  display.textContent = '';
}

// Backspace
function backspace() {
  display.textContent = display.textContent.slice(0, -1);
}

// Calculate the result (with BODMAS and Error Handling)
function calculate() {
  try {
    let expression = display.textContent;

    // Handle division by zero
    if (expression.includes('/0')) {
      throw new Error('Division by zero');
    }

    // Evaluate the expression using Function constructor
    const result = new Function(`return (${expression})`)();

    // Check if the result is finite
    if (!isFinite(result)) {
      throw new Error('Invalid calculation');
    }

    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
    console.error(error.message);
  }
}
