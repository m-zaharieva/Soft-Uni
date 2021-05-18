function worldSwimmingRecord(curentWorldRecord, distanceInput, secondsPerMeterInput) {
    let worldRecord = Number(curentWorldRecord);
    let distance = Number(distanceInput);
    let secondsPerMeter = Number(secondsPerMeterInput);

    let idealTime = distance * secondsPerMeter;
    let delay = (Math.floor(distance / 15) * 12.5);

    let finalResult = idealTime + delay; 

    if(finalResult < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${finalResult.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(finalResult - worldRecord).toFixed(2)} seconds slower.`)
    }

};

worldSwimmingRecord("10464", "1500", "20");