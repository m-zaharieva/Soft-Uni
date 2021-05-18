function dayOfWeek(day) {
    let daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(daysArr[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);