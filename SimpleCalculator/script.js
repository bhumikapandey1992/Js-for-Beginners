let currentValue ='';
let previousValue = '';
let operation = null;

function appendNumber(number){
    currentValue +=number;
    updateDisplay(currentValue);
}

function setOperation(op){
    if(currentValue === '') return;

    if(previousValue !==''){
        calculate();
    }
    operation = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    let result;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentValue = result.toString();
    operation = null;
    previousValue = '';
    updateDisplay(currentValue);
}

function updateDisplay(value){
    const display = document.getElementById('display');
    display.textContent = value;
}
function clearDisplay(){
     currentValue ='';
     previousValue = '';
     operation = null;
    updateDisplay('0');
}