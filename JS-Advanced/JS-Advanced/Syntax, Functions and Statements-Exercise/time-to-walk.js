function timeToWalk(steps, footprint, speed) {
    let distance = (steps * footprint);
    let distanceInKm = distance / 1000;
    let breaks = Math.floor(distance / 500);
    let time = distanceInKm / speed * 3600;
    let totalTime = time + (breaks * 60);

    let hours = Math.trunc(totalTime / 3600);
    totalTime -= hours * 3600;
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = Math.trunc(totalTime / 60);
    totalTime -= minutes * 60;
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let seconds = Math.ceil(totalTime);
    totalTime = totalTime - seconds;
    if (seconds < 10) {
        seconds = `0${seconds}`
    }


    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(8000, 0.60, 5);