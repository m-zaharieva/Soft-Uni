function numbers (num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);

    if (number1 >= number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}

numbers("5", "3");