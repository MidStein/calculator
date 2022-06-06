function add(num1, num2) {
    return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}
function equalsClicked() {
    display.textContent = operate(operator, operand1, operand2);
}
function numberClicked() {
    display.textContent += this.textContent;
    if (operatorEntered) {
        operand2 += this.textContent;
    }
}
function operationClicked() {
    operand1 = display.textContent;
    operator = this.textContent;
    display.textContent += " " + this.textContent + " ";
    operatorEntered = true;
}
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
let operand1, operator, operand2 = '', operatorEntered = false;
numbers.forEach(number => number.addEventListener('click', numberClicked));
operations.forEach(operation => operation.addEventListener('click', operationClicked));
equals.addEventListener('click', equalsClicked);
display.textContent = '';