function calculator(number, operator, secondNumber) {
    switch (operator) {
        case '+': console.log((number + secondNumber).toFixed(2)); break;
        case '-': console.log((number - secondNumber).toFixed(2)); break;
        case '*': console.log((number * secondNumber).toFixed(2)); break;
        case '/': console.log((number / secondNumber).toFixed(2)); break;
    }
}

calculator(5, '+', 10);
