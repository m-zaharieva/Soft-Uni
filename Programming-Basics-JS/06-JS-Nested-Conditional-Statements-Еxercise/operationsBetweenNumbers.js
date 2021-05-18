function operationsBtwNumbers (num1, num2, operation) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    if (operation === "+") {
        if ((firstNumber + secondNumber) % 2 === 0) {
            console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber + secondNumber} - even`);
        } else {
            console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber + secondNumber} - odd`);
        }
    } else if (operation === "-") {
        if ((firstNumber - secondNumber) % 2 === 0) {
            console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber - secondNumber} - even`);
        } else {
            console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber - secondNumber} - odd`);
        }
    } else if (operation === "*") {
        if ((firstNumber * secondNumber) % 2 === 0) {
            console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber * secondNumber} - even`);
        } else {
            console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber * secondNumber} - odd`);
        }
    } else if (operation === "/" && secondNumber !== 0) {
        console.log(`${firstNumber} ${operation} ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);
    } else if (operation === "%" && secondNumber !== 0) {
        console.log(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber % secondNumber}`);
    } else if (secondNumber === 0) {
        console.log(`Cannot divide ${firstNumber} by zero`);
    }

}

operationsBtwNumbers("10", "0", "%");