function factorialDivision(firstNum, secondNum) {
    let firstFactorial = factorial(firstNum);
    let secondFactorial = factorial(secondNum);

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

    function factorial(num) {
        let tempFactorial = 1;
        for (let i = 1; i <= num; i++) {
            tempFactorial *= i;
        }

        return tempFactorial;
    }

}

factorialDivision(5, 2);