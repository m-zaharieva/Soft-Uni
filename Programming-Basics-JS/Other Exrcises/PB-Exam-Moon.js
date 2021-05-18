function moon(averageSpeedInput, fuelPer100kmInput) {
    let averageSpeed = Number(averageSpeedInput);
    let fuel = Number(fuelPer100kmInput);

    let distance = 384400 * 2;  //768 800
    let hoursTraveling = Math.ceil(distance / averageSpeed);
    let totalHours = hoursTraveling + 3; 
    let fuelNeeded = (fuel * distance) / 100;

    console.log(totalHours);
    console.log(fuelNeeded);
}

moon("15000", "4");