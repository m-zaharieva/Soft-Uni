function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let result = number.toFixed(precision);
    console.log(parseFloat(result));
}

rounding(10.5, 3);


// function rounding(num, precisionInput) {
//     let number = Number(num);
//     let precision = Number(precisionInput);

//     if (precision > 15) {
//         precision = 15; 
//     }

//     number = number.toFixed(precision);
//     let result = parseFloat(number);

//     console.log(result);

// }

// rounding(3.1415926535897932384626433832795, 3);