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