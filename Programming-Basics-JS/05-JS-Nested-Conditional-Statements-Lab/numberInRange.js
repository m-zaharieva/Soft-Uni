function numberInRange (numberInput) {
    let number = Number(numberInput);

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange(120);