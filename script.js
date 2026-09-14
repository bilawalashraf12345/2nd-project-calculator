let display = document.getElementById("display");

function addNumber(number) {
    display.value += number;
}

function addOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        let number = eval(display.value);
        display.value = number * number;
    } catch {
        display.value = "Error";
    }
}

function calculatePercentage() {
    try {
        let number = eval(display.value);
        display.value = number / 100;
    } catch {
        display.value = "Error";
    }
}