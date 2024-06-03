let firstNum = "";
let secondNum = "";
let operator = "";

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    if (secondNum === 0) {
        return "Math ERROR";
    } else {
        return firstNum / secondNum;
    }
}

function operate(operator, firstNum, secondNum) {
    let result;
    switch (operator) {
        case "+":
            result = add(parseFloat(firstNum), parseFloat(secondNum));
            break;
        case "-":
            result = subtract(parseFloat(firstNum), parseFloat(secondNum));
            break;
        case "*":
            result = multiply(parseFloat(firstNum), parseFloat(secondNum));
            break;
        case "/":
            result = divide(parseFloat(firstNum), parseFloat(secondNum));
            break;
        default:
            result = "Invalid Operator";
    }
    return result;
}

function updateDisplay(value) {
    let display = document.querySelector(".display");
    if (display.innerHTML === "0" || display.innerHTML === "Math ERROR") {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

function clearDisplay() {
    let display = document.querySelector(".display");
    display.innerHTML = "0";
}

function setOperator(op) {
    operator = op;
    firstNum = document.querySelector(".display").innerHTML;
    clearDisplay();
}

function setSecondNumber() {
    secondNum = document.querySelector(".display").innerHTML;
}

function displayResult() {
    setSecondNumber();
    let result = operate(operator, firstNum, secondNum);
    let display = document.querySelector(".display");
    display.innerHTML = result;
}

document.querySelector("#seven").addEventListener("click", function () {
    updateDisplay(7);
});

document.querySelector("#eight").addEventListener("click", function () {
    updateDisplay(8);
});

document.querySelector("#nine").addEventListener("click", function () {
    updateDisplay(9);
});

document.querySelector("#plus").addEventListener("click", function () {
    setOperator("+");
});

document.querySelector("#four").addEventListener("click", function () {
    updateDisplay(4);
});

document.querySelector("#five").addEventListener("click", function () {
    updateDisplay(5);
});

document.querySelector("#six").addEventListener("click", function () {
    updateDisplay(6);
});

document.querySelector("#minus").addEventListener("click", function () {
    setOperator("-");
});

document.querySelector("#one").addEventListener("click", function () {
    updateDisplay(1);
});

document.querySelector("#two").addEventListener("click", function () {
    updateDisplay(2);
});

document.querySelector("#three").addEventListener("click", function () {
    updateDisplay(3);
});

document.querySelector("#star").addEventListener("click", function () {
    setOperator("*");
});

document.querySelector("#zero").addEventListener("click", function () {
    updateDisplay(0);
});

document.querySelector("#clear").addEventListener("click", function () {
    firstNum = "";
    secondNum = "";
    operator = "";
    clearDisplay();
});

document.querySelector("#equal").addEventListener("click", function () {
    displayResult();
});

document.querySelector("#div").addEventListener("click", function () {
    setOperator("/");
});
