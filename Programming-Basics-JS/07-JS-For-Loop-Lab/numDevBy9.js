function numbersBy9 (num1, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2); 
    let sum = 0; 
    let num = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let z = firstNumber; z <= secondNumber; z++) {
        if (z % 9 === 0) {
            console.log(z);
        }
    }
}

numbersBy9("100", "200");