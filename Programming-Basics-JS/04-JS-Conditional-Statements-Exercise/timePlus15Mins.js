function timePlus15Mins(hoursInput, minutesInput) {
    let hours = Number(hoursInput);
    let minutes = Number(minutesInput) + 15;

    if (minutes >= 60) {
        minutes = minutes - 60;
        hours = hours + 1;
    }

    if(minutes <=9) {
        minutes = `0${minutes}`;
    }

    if(hours >=24) {
        hours = hours - 24; 
    }

    console.log(`${hours}:${minutes}`);
};



timePlus15Mins("1", "46");