// State calculator
let currentInput = '0';
let previousInput = '';
let currentOperator = null;
let shouldResetScreen = false;

// DOM Elements
const currOperandEl = document.getElementById('curr-operand');
const prevOperandEl = document.getElementById('prev-operand');

// Arictmatics functions (Modular)
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "Error: Bagi 0"; 
    return a / b; 
}

function operate(op, num1, num2) {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let result;

    switch (op) {
        case '+': result = add(n1, n2); break;
        case '-': result = subtract(n1, n2); break;
        case '*': result = multiply(n1, n2); break;
        case '/': result = divide(n1, n2); break;
        default: return;
    }
    
    // Number decimals limited (misal: 0.1 + 0.2 = 0.30000000000000004)
    return Math.round(result * 100000000) / 100000000;
}

function updateDisplay() {
    currOperandEl.textContent = currentInput;
    if (currentOperator != null) {
        prevOperandEl.textContent = `${previousInput} ${currentOperator}`;
    } else {
        prevOperandEl.textContent = '';
    }
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
}

function appendDecimal() {
    if (shouldResetScreen) {
        currentInput = '0';
        shouldResetScreen = false;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

function chooseOperator(op) {
    if (currentOperator !== null && !shouldResetScreen) {
        // Left-to-Right evaluation
        calculate();
    }
    previousInput = currentInput;
    currentOperator = op;
    shouldResetScreen = true;
}

function calculate() {
    if (currentOperator === null || shouldResetScreen) return;

    let result = operate(currentOperator, previousInput, currentInput);
    
    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    shouldResetScreen = true;
    
    // Error costum handling
    if (currentInput === 'NaN' || currentInput.includes('Error')) {
        currentInput = 'Error';
    }
}

function clearAll() {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    shouldResetScreen = false;
}

function backspace() {
    if (shouldResetScreen) return;
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
}

// --- EVENT LISTENERS ---

// 1. Click Tombols
document.querySelectorAll('.keys').forEach(buttonContainer => {
    buttonContainer.addEventListener('click', (e) => {
        if (!e.target.matches('button')) return;
        
        const btn = e.target;
        
        if (btn.dataset.number) {
            appendNumber(btn.dataset.number);
            updateDisplay();
        } else if (btn.dataset.operator) {
            chooseOperator(btn.dataset.operator);
            updateDisplay();
        } else {
            // Handle tombol action (AC, DEL, ., =)
            switch(btn.dataset.action) {
                case 'clear': clearAll(); break;
                case 'backspace': backspace(); break;
                case 'decimal': appendDecimal(); break;
                case 'calculate': calculate(); break;
            }
            updateDisplay();
        }
    });
});

// 2. Inputs Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
        updateDisplay();
    } else if (e.key === '.') {
        appendDecimal();
        updateDisplay();
    } else if (['+', '-', '*', '/'].includes(e.key)) {
        chooseOperator(e.key);
        updateDisplay();
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault(); // Form default actions prevent
        calculate();
        updateDisplay();
    } else if (e.key === 'Backspace') {
        backspace();
        updateDisplay();
    } else if (e.key === 'Escape') {
        clearAll();
        updateDisplay();
    }
});