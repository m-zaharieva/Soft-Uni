function mathOperations(firstNum, secondNum, operant) {
    let result;
    switch (operant) {
        case '+': result = firstNum + secondNum; break; 
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');