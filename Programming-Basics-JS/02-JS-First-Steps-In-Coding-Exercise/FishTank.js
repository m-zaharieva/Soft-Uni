function fishTank(length, width, heigth, percentsInput) {
    let volume = Number(length) * Number(width) * Number(heigth);
    let tankLitters = volume * 0.001;
    let percents = Number(percentsInput) /100;
    let littersNeeded = tankLitters * (1 - percents);

    console.log(littersNeeded);


};

fishTank("85", "75", "47", "17");