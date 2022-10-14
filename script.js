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

