function mountainRun(worldRecordInput, distanceInput, secPerMeterInput) {
    let worldRecord = Number(worldRecordInput);
    let distance = Number(distanceInput);
    let secondsPerMeter = Number(secPerMeterInput);
    let time = distance * secondsPerMeter;
    let delay = (Math.floor(distance / 50)) * 30;
    let result = time + delay;

    if (result >= worldRecord) {
        console.log(`No! He was ${(result - worldRecord).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${result.toFixed(2)} seconds.`);
    }
}

//mountainRun(10164, 1400, 25);
//mountainRun(5554.36, 1340, 3.23);
mountainRun(1377 ,389, 3);
