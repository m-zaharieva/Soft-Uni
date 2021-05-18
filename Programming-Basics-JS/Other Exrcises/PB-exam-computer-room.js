function computerRoom(monthInput, hoursInput, peopleInAGroupInput, dayOrNightInput) {
    let month = monthInput;
    let hours = Number(hoursInput);
    let peopleInaGroup = Number(peopleInAGroupInput);
    let dayOrNight = dayOrNightInput;
    let prise = 0; 
    let prisePerPerson = 0;

    switch (month) {
        case "march": 
        case "april":
        case "may":
            if (dayOrNight === "day") {
                prisePerPerson = 10.50; 
                prise = hours * prisePerPerson * peopleInaGroup;

                if (peopleInaGroup >= 4) {
                    prisePerPerson = prisePerPerson * 0.9;
                    prise = hours * prisePerPerson * peopleInaGroup;  
                }

                if (hours >= 5) {
                    prisePerPerson = prisePerPerson * 0.5;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }
            } else if (dayOrNight === "night") {
                prisePerPerson = 8.40; 
                prise = hours * prisePerPerson * peopleInaGroup; 

                if (peopleInaGroup >= 4) {
                    prisePerPerson = prisePerPerson * 0.9;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }

                if (hours >= 5) {
                    prisePerPerson = prisePerPerson * 0.5;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }                
            }
             break;
        case "june":
        case "july":
        case "august":
            if (dayOrNight === "day") {
                prisePerPerson = 12.60; 
                prise = hours * prisePerPerson * peopleInaGroup; 

                if (peopleInaGroup >= 4) {
                    prisePerPerson = prisePerPerson * 0.9;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }

                if (hours >= 5) {
                    prisePerPerson = prisePerPerson * 0.5;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }
            } else if (dayOrNight === "night") {
                prisePerPerson = 10.20; 
                prise = hours * prisePerPerson * peopleInaGroup; 

                if (peopleInaGroup >= 4) {
                    prisePerPerson = prisePerPerson * 0.9;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }

                if (hours >= 5) {
                    prisePerPerson = prisePerPerson * 0.5;
                    prise = hours * prisePerPerson * peopleInaGroup; 
                }                
            }
             break;
    }

    console.log(`Price per person for one hour: ${prisePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${prise.toFixed(2)}`);

}

computerRoom("march", "3", "3", "day");


// Да се отпечатат на конзолата 2 реда:
//     • На първия ред: "Price per person for one hour: {цена на човек за час}"
//     • На втория ред: "Total cost of the visit: {общата цена}"