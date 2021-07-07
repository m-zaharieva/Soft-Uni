function sumOfNumbers(a, b) {
    let firstNum = Number(a);
    let secondNum = Number(b);

    let result = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    console.log(result);
}

sumOfNumbers('-8', '20');