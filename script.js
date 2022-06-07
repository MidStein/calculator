function add(num1, num2) {
    return String(Number(num1) + Number(num2));
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
        if (num2 !== '0') {
            return divide(num1, num2);
        } else {
            alert('No badmaashi');
            return num1;
        }
    }
}
function equalsClicked() {
    if (!(operand2 === '')) {
        const sol = operate(operator, operand1, operand2);
        display.textContent = Math.round(sol * 100000) / 100000;
        operand1 = display.textContent;
        if (sol == Math.round(sol)) {
            decimalEntered = false;
        }
    } else {
        display.textContent = operand1;
    }
    operator = '';
    operatorEntered = false;
    operand2 = '';
}
function numberClicked(arg) {
    if (typeof arg === 'object') {
        input = this.textContent;
    } else {
        input = arg;
    }
    if (input === '.') {
        if (!decimalEntered) {
            decimalEntered = true;
        } else return;
    }
    display.textContent += input;
    if (operatorEntered) {
        operand2 += input;
    }
}
function operationClicked(arg) {
    if (typeof arg === 'object') {
        input = this.textContent;
    } else {
        input = arg;
    }
    if (!(operator == '')) {
        equalsClicked();
    }
        operand1 = display.textContent;
        operator = input;
        display.textContent += " " + input + " ";
        operatorEntered = true;
        decimalEntered = false;
}
function clearClicked() {
    display.textContent = '';
    operator = '';
    operatorEntered = false;
    operand2 = '';
    decimalEntered = false;
}
function backspaceClicked() {
    if (!isNaN(display.textContent[display.textContent.length - 1]) || display.textContent[display.textContent.length - 1] === '.') {
        if (display.textContent[display.textContent.length - 1] === '.') {
            decimalEntered = false;
        }
        if (!operatorEntered) {
            operand1 = operand1.slice(0, operand1.length - 1);
        } else {
            operand2 = operand2.slice(0, operand2.length - 1);
        }
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
}
function keyboardSupport(e) {
    let key = e.key;
    if (key === '=') {
        equalsClicked();
    } else if (!isNaN(key) || key === '.') {
        numberClicked(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        operationClicked(key);
    } else if (key === 'Escape') {
        clearClicked();
    } else if (key === 'Backspace') {
        backspaceClicked();
    }
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const backspace = document.querySelector('.backspace');
const allKeys = document.querySelectorAll('.row div');

let input;
let operand1, operator = '', operand2 = '';
let operatorEntered = false, decimalEntered = false;

numbers.forEach(number => number.addEventListener('click', numberClicked));
operations.forEach(operation => operation.addEventListener('click', operationClicked));
equals.addEventListener('click', equalsClicked);
clear.addEventListener('click', clearClicked);
decimal.addEventListener('click', numberClicked);
backspace.addEventListener('click', backspaceClicked);
window.addEventListener('keydown', keyboardSupport);