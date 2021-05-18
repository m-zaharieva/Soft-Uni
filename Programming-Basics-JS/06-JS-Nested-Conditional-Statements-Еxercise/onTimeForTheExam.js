function onTime (hourExamInput, minExamInput, hourArriveInput, minArriveInput) {
    let hourExam = Number(hourExamInput);
    let minExam = Number(minExamInput);
    let hourArrivel = Number(hourArriveInput);
    let minArrivel = Number(minArriveInput);
    let timeDifference = 0

    let timeExamInMinutes = hourExam * 60 + minExam;
    let timeArrivelInMinutes = hourArrivel * 60 + minArrivel;

    if (timeExamInMinutes === timeArrivelInMinutes) {
        console.log("On time");
    } else if (timeArrivelInMinutes > timeExamInMinutes) {
        console.log("Late");
        timeDifference = timeArrivelInMinutes - timeExamInMinutes;

        if (timeDifference <= 59) {
            console.log(`${timeDifference} minutes after the start`);
        } else {
            if ((timeDifference % 60) <= 9) {
                console.log(`${Math.floor(timeDifference / 60)}:0${timeDifference % 60} hours after the start`);
            } else {
                console.log(`${Math.floor(timeDifference / 60)}:${timeDifference % 60} hours after the start`);
            }
        }

    } else if (timeExamInMinutes > timeArrivelInMinutes) {
        timeDifference = timeExamInMinutes - timeArrivelInMinutes;

        if (timeDifference <= 30) {
            console.log("On time")
            console.log(`${timeDifference} minutes before the start`);
        } else if (timeDifference <=59) {
            console.log("Early")
            console.log(`${timeDifference} minutes before the start`);
        } else {
            if ((timeDifference % 60) <= 9) {
                console.log("Early")
                console.log(`${Math.floor(timeDifference / 60)}:0${timeDifference % 60} hours before the start`);
            } else {
                console.log("Early")
                console.log(`${Math.floor(timeDifference / 60)}:${timeDifference % 60} hours before the start`);
            }
        }
    }
   
}


onTime("14", "00", "13", "55");