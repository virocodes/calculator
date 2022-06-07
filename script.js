let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b
let operate = function(opp, a, b) {
    let final;
    switch (opp) {
        case "+":
            final = add(a, b);
            break;
        case "-":
            final = subtract(a, b);
            break;
        case "*":
            final = multiply(a, b);
            break;
        case "/":
            final = divide(a, b);
            break;
    }
    return final;
}

let equate = function() {
    let equation = displayValue.split(" ");
    num1 = Number(equation[0]);
    opp = equation[1];
    num2 = Number(equation[2]);
    if (opp == '/' && num2 == 0) {
        displayValue = "Can't divide by 0!";
        display.textContent = displayValue;
    } else {
        final = operate(opp, num1, num2);
        let rounded = Math.round(final * 1000) / 1000;
        displayValue = rounded.toString();
        display.textContent = displayValue;
    }
}

let includesOpps = function(str) {
    return (str.includes("+") || str.includes("-") || str.includes("*") || str.includes("/"));
}

let displayValue = "";
const display = document.querySelector('div.display')
const nums = document.querySelectorAll('div.nums > button');
const decimal = document.querySelector('.decimal');
const opps = document.querySelectorAll('div.opps > button');
const equals = document.querySelector('button.equals');
const clear = document.querySelector('button.clear');
const del = document.querySelector('.delete');

nums.forEach((item) => {
    item.addEventListener('click', () => {
        displayValue += item.textContent;
        display.textContent = displayValue;
    })
});

decimal.addEventListener('click', () => {
    displayValue += '.';
    display.textContent = displayValue;
    decimal.style.display = 'none';
})

let num1;
let num2;
let opp;
let final;

opps.forEach((item) => {
    item.addEventListener('click', () => {
        if (!(includesOpps(displayValue))) {
            displayValue += " " + item.textContent + " ";
            display.textContent = displayValue;
        } else {
            equate();
            displayValue += " " + item.textContent + " ";
            display.textContent = displayValue;
        }
        decimal.style.display = 'inline-block';
    })
});

equals.addEventListener('click', equate);

clear.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    num1 = undefined;
    num2 = undefined;
    opp = undefined;
    decimal.style.display = 'inline-block';
});

del.addEventListener('click', () => {
    let newVal = displayValue.slice(0, -1);
    displayValue = newVal;
    display.textContent = displayValue;
})

window.addEventListener('keydown', event => {
    if (event.key == '0') {
        displayValue += '0'
        display.textContent = displayValue;
    } else if (event.key == '1') {
        displayValue += '1'
        display.textContent = displayValue;
    } else if (event.key == '2') {
        displayValue += '2'
        display.textContent = displayValue;
    } else if (event.key == '3') {
        displayValue += '3'
        display.textContent = displayValue;
    } else if (event.key == '4') {
        displayValue += '4'
        display.textContent = displayValue;
    } else if (event.key == '5') {
        displayValue += '5'
        display.textContent = displayValue;
    } else if (event.key == '6') {
        displayValue += '6'
        display.textContent = displayValue;
    } else if (event.key == '7') {
        displayValue += '7'
        display.textContent = displayValue;
    } else if (event.key == '8') {
        displayValue += '8'
        display.textContent = displayValue;
    } else if (event.key == '9') {
        displayValue += '9'
        display.textContent = displayValue;
    } else if (event.key == '.') {
        displayValue += '.';
        display.textContent = displayValue;
        decimal.style.display = 'none';
    } else if (event.key == '+') {
        if (!(includesOpps(displayValue))) {
            displayValue += " + ";
            display.textContent = displayValue;
        } else {
            equate();
            displayValue += " + ";
            display.textContent = displayValue;
        }
        decimal.style.display = 'inline-block';
    } else if (event.key == '-') {
        if (!(includesOpps(displayValue))) {
            displayValue += " - ";
            display.textContent = displayValue;
        } else {
            equate();
            displayValue += " - ";
            display.textContent = displayValue;
        }
        decimal.style.display = 'inline-block';
    } else if (event.key == '*') {
        if (!(includesOpps(displayValue))) {
            displayValue += " * ";
            display.textContent = displayValue;
        } else {
            equate();
            displayValue += " * ";
            display.textContent = displayValue;
        }
        decimal.style.display = 'inline-block';
    } else if (event.key == '/') {
        if (!(includesOpps(displayValue))) {
            displayValue += " / ";
            display.textContent = displayValue;
        } else {
            equate();
            displayValue += " / ";
            display.textContent = displayValue;
        }
        decimal.style.display = 'inline-block';
    } else if (event.key == '=') {
        equate();
    } else if (event.key == 'Backspace') {
        let newVal = displayValue.slice(0, -1);
        displayValue = newVal;
        display.textContent = displayValue;
    } else if (event.key == 'Enter') {
        equate();
    }
});