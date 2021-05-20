function timeToWalk(steps, footprint, speed) {
    let distance = (steps * footprint);
    let distanceInKm = distance / 1000;
    let breaks = Math.floor(distance / 500);
    let time = distanceInKm / speed * 3600;
    let totalTime = time + (breaks * 60);


    console.log(totalTime);
}

timeToWalk(2564, 0.70, 5.5);