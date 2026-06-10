let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function appendOperator(op) {
    if (display.value === '') return;
    
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function appendDecimal(dot) {
    if (display.value === '') {
        display.value = '0.';
    } else {
        const numbers = display.value.split(/[\+\-\*\/%]/);
        const lastNumber = numbers[numbers.length - 1];
        
        if (!lastNumber.includes('.')) {
            display.value += dot;
        }
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculate() {
    try {
        const result = eval(display.value);
        
        if (!isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = Math.round(result * 100000000) / 100000000;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Initialize display
display.value = '0';
