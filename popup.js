const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator button");

let num1 = null;
let num2 = null;
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      // Handle numbers and decimal
      display.value += value;
    } else if (value === "C") {
      // Clear display
      display.value = "";
      num1 = num2 = operator = null;
    } else if (value === "=") {
      // Calculate result
      num2 = parseFloat(display.value);
      let result = 0;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
      }
      display.value = result;
      num1 = result; // Store result for further operations
    } else {
      // Handle operators
      num1 = parseFloat(display.value);
      operator = value;
      display.value = ""; // Clear display for second number
    }
  });
});
