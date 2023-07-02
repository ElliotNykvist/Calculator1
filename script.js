const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let currentValue = "";
let operator = "";
let result = null;

buttons.forEach(button => {
  button.addEventListener("click", buttonClick);
});

function buttonClick(event) {
  const clickedButton = event.target.innerText;

  if (clickedButton === "C") {
    clearCalculator();
  } else if (isOperator(clickedButton)) {
    handleOperator(clickedButton);
  } else if (clickedButton === "=") {
    if (currentValue !== "" && operator !== "") {
      calculate();
      operator = "";
    }
  } else {
    currentValue += clickedButton;
    screen.innerText = currentValue;
  }
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function handleOperator(value) {
  if (currentValue !== "" && operator === "") {
    result = parseFloat(currentValue);
    operator = value;
    currentValue = "";
    screen.innerText = result + " " + operator;
  } else if (currentValue !== "" && operator !== "") {
    operator = value;
    screen.innerText = result + " " + operator;
  }
}

function calculate() {
  const num1 = result;
  const num2 = parseFloat(currentValue);

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }

  screen.innerText = result;
  currentValue = "";
}

function clearCalculator() {
  currentValue = "";
  operator = "";
  result = null;
  screen.innerText = "0";
}