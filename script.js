const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let firstNumber = '';
let operator = '';
let secondNumber = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            display.value = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } else if (value === '=') {
            if (firstNumber && operator && secondNumber) {
                const result = calculate(firstNumber, secondNumber, operator);
                display.value = result;
                firstNumber = result; 
                secondNumber = '';
                operator = '';
            }}
            else if( value === 'del'){
                display.value= display.value.slice(0,-1);
            }
        else if (['+', '-', '*', '/' ].includes(value)) {
            if (firstNumber) {
                operator = value;
                display.value +=  operator;
            }
        } else {
            if (!operator) {
                firstNumber += value;
            } else {
                secondNumber += value;
            }
            display.value += value; 
        }
    });
});

function calculate(firstNumber, secondNumber, operator) {
    if(  operator == '+'){
        return Number( firstNumber) + Number( secondNumber);
    }
    else if( operator == '-'){
        return  Number( firstNumber) - Number( secondNumber);
    }
    else if(operator == '*'){
        return  Number( firstNumber) * Number( secondNumber);
    }
    else if(operator == '/'){
        return  Number( firstNumber) / Number( secondNumber);
    }
}
