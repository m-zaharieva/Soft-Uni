function depositCalculator(depositInput, periodInput, percentInput) {
    let deposit = +depositInput;
    let period = +periodInput;
    let percent = +percentInput / 100; 

    let sum = deposit + period * ((deposit * percent) / 12);

    console.log(sum);
};

depositCalculator("200", "3", "5.7");