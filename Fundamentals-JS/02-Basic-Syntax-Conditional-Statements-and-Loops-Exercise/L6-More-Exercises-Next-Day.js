function nextDay(year, month, day) {
    let today = new Date(year, month-1, day+1);
    let yearResult = today.getFullYear();
    let monthResult = today.getMonth();
    let dayResult = today.getDate();
    console.log(`${yearResult}-${monthResult+1}-${dayResult}`);
}

nextDay(2016, 9, 30);

// function nextDay(year, month, day) {
//     let today = new Date(year, month-1, day+1);
//     let yearResult = today.getFullYear();
//     let monthResult = today.getMonth();
//     let dayResult = today.getDate();
//     console.log(`${yearResult}-${monthResult+1}-${dayResult}`);
// }

// nextDay(2016, 9, 30);