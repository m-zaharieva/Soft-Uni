function pipesInPool (volumeInput, pipe1Input, pipe2Input, hoursInput) {
    let volume = Number(volumeInput);
    let pipeOne = Number(pipe1Input);
    let pipeTwo = Number(pipe2Input);
    let hoursOut = Number(hoursInput);

    let waterFromPipeOne = pipeOne * hoursOut;
    let waterFromPipeTwo = pipeTwo * hoursOut;
    let waterFromBothPipes = waterFromPipeOne + waterFromPipeTwo;
    let waterInPercents = (waterFromBothPipes / volume * 100).toFixed(2);
    let pipeOnePercents = (waterFromPipeOne / waterFromBothPipes * 100).toFixed(2);
    let pipeTwoPercents = (waterFromPipeTwo / waterFromBothPipes * 100).toFixed(2);

    if ((waterFromBothPipes) <= volume) {
        console.log(`The pool is ${waterInPercents}% full. Pipe 1: ${pipeOnePercents}%. Pipe 2: ${pipeTwoPercents}%.`);
    } else {
        console.log(`For ${hoursOut} hours the pool overflows with ${(waterFromBothPipes - volume).toFixed(2)} liters.`);
    }

}

pipesInPool(1000, 100, 120, 3);