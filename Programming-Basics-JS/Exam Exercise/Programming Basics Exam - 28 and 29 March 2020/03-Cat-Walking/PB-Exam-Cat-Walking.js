function catWalk(min, count, cal) {
    let minutes = Number(min);
    let walksCount = Number(count);
    let eatCal = Number(cal);

    let minTotal = minutes * walksCount;
    let walkCal = minTotal * 5;

    if (walkCal >= (eatCal * 0.5)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${walkCal}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${walkCal}.`);
    }

}

catWalk(30, 3, 600);

