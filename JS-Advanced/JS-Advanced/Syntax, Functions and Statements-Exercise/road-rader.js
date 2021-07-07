function roadRader(speed, area) {
    let limit = 0; 
    switch(area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let speedDifference = speed - limit;
        let status = '';
        if (speedDifference <= 20) {
            status = 'speeding';
        } else if (speedDifference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limit} - ${status}`);

    }
}

roadRader(200, 'motorway');
