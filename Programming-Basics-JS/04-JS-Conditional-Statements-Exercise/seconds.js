function finishTime(timeFirst, timeSecond, timeThird) {
    let time1 = Number(timeFirst);
    let time2 = Number(timeSecond);
    let time3 = Number(timeThird);
    let totalTime = time1 + time2 + time3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
};

finishTime("35", "45", "44");