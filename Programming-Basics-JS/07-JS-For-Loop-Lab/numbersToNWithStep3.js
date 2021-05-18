function numbersToNWithStep3 (arg) {
    let num = Number(arg); 

    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }

}

numbersToNWithStep3("10");