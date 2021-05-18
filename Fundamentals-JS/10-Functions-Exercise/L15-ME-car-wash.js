function carWash(array) {
    let cleansProgress = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'soap') {
            cleansProgress += 10; 
        } else if (command === 'vacuum cleaner') {
            cleansProgress *= 1.25;
        } else if (command === 'water') {
            cleansProgress *= 1.20;
        } else if (command === 'mud') {
            cleansProgress *= 0.9;
        }
    }

    console.log( `The car is ${cleansProgress.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

// • soap – add 10 to the value
// • water – increase the value with 20%
// • vacuum cleaner – increase the value with 25%
// • mud – decrease the value with 10%