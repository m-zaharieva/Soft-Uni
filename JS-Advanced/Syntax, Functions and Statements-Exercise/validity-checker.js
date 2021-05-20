function solve(x1, y1, x2, y2) {
    let distanceP1 = Math.sqrt(x1**2 + y1**2);
    let distanceP2 = Math.sqrt(x2**2 + y2**2);
    let distanceBtwPoints = Math.sqrt((Math.abs(x1 - x2))**2 + (Math.abs(y1 - y2))**2);
    let status = '';

    if (Math.trunc(distanceP1) === distanceP1) {
        status = 'valid'
    } else {
        status = 'invalid'
    }
    
    console.log(`{${x1}, ${y1}} to {0, 0} is ${status}`);
    
    if (Math.trunc(distanceP2) === distanceP2) {
        status = 'valid'
    } else {
        status = 'invalid'
    }

    console.log(`{${x2}, ${y2}} to {0, 0} is ${status}`);

    if (Math.trunc(distanceBtwPoints) === distanceBtwPoints) {
        status = 'valid'
    } else {
        status = 'invalid'
    }

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);


}

solve(3, 0, 0, 4);