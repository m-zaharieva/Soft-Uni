function meetings(arr) {

    let schedule = {};

    arr.forEach(line => {
        let [day, name] = line.split(' ');
        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });

    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);