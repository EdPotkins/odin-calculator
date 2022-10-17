let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const buttons = document.querySelectorAll("button");

function updateDisplay(){
    const display = document.querySelector("#display");
    display.textContent = displayValue; 
}

updateDisplay();

function clickButton() {
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            if(button.classList.contains("operand")) {
                inputOperand(button.value);
                updateDisplay();
            } else if(button.classList.contains("operator")) {
                inputOperator(button.value);
            } else if(button.classList.contains("equals")) {
                inputEquals();
                updateDisplay(); 
            } else if(button.classList.contains("clear")) {
                clearDisplay();
                updateDisplay();
            }
        });
    });
}

clickButton();

function inputOperand(operand) {
    if(firstOperator === null){
        if(displayValue === "0" || displayValue === 0) {
            displayValue = operand;
        } else if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue +=operand;
        }
    }
}

function inputOperator(operator) {
    if(firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(firstOperator, Number(firstOperand), Number(secondOperand));
        displayValue = result.toString();
        firstOperand = displayValue;
        result = null;
    } else {
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    secondOperand = displayValue;
    result = operate(firstOperator, Number(firstOperand), Number(secondOperand));
    displayValue = result.toString();
    firstOperand = displayValue;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}


function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if (operator === "+"){
        return add(a, b);
    } else if (operator === "-"){
        return substract(a, b);
    } else if (operator === "*"){
        return multiply(a, b);
    } else if (operator === "/"){
        return divide(a, b);
    } return;
}

