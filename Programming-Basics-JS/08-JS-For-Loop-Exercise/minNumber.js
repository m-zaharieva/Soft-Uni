function minNumber (input) {
    let numCount = Number(input[0]);   // 3
    let min = Number.POSITIVE_INFINITY;
    
    for (let i = 1; i <= numCount; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < min) {
            min = currentNumber;
        }
    }

    console.log(min);
}

minNumber(["3", "-10", "20", "-30"]);