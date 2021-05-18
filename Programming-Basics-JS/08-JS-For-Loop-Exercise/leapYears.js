function leapYears (leapYearInput, randomYearInput) {
    let leapYear = Number(leapYearInput);
    let randomYear = Number(randomYearInput);

    for (let i = leapYear; i <= randomYear; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }
    }
}

leapYears("2020", "2056");