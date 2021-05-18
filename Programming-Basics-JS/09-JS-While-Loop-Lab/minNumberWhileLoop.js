function minNumber (input) {
    let minNumber = Number(input[0]);
    let index = 1;

    while (input[index] !== "Stop") {
        if (minNumber < Number(input[index])) {
            index++;
        } else {
            minNumber = Number(input[index]);
            index++;
        }
    }

    console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);