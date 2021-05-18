function easterTrip(country, datesInput, nightsInput) {
    let destination = country;
    let dates = datesInput;
    let nights = Number(nightsInput);
    let prise = 0;

    switch (destination) {
        case "France":
            switch (dates) {
                case "21-23": prise = nights * 30; break;
                case "24-27": prise = nights * 35; break;
                case "28-31": prise = nights * 40; break;
            }
            break;
        case "Italy":
            switch (dates) {
                case "21-23": prise = nights * 28; break;
                case "24-27": prise = nights * 32; break;
                case "28-31": prise = nights * 39; break;
            }
            break; 
        case "Germany":
            switch (dates) {
                case "21-23": prise = nights * 32; break;
                case "24-27": prise = nights * 37; break;
                case "28-31": prise = nights * 43; break;
            }
            break;
    }

    console.log(`Easter trip to ${destination} : ${prise.toFixed(2)} leva.`);
}

easterTrip("Germany", "24-27", "5");


// "Easter trip to {дестинация} : {разходи за екскурзията} leva."