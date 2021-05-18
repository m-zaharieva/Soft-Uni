function hotelRoom (monthInput, nightsInput) {
    let month = monthInput;
    let nights = Number(nightsInput);
    let studioPrise = 0;
    let apartmentPrise = 0;

    if (month === "May" || month === "October") {  
        if (nights <= 7) {
            studioPrise = nights * 50;
            apartmentPrise = nights * 65;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        } else if (nights > 7 && nights <= 14) {
            studioPrise = (nights * 50) * 0.95;
            apartmentPrise = nights * 65;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        } else if (nights > 14) {
            studioPrise = (nights * 50) * 0.70;
            apartmentPrise = (nights * 65) * 0.9;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        }
    } else if (month === "June" || month === "September") {
        if (nights <= 14) {
            studioPrise = nights * 75.20;
            apartmentPrise = nights * 68.70;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        } else if (nights > 14) {
            studioPrise = (nights * 75.20) * 0.80;
            apartmentPrise = (nights * 68.70) * 0.9;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        }        
    } else if (month === "July" || month === "August") {
        if (nights <= 14) {
            studioPrise = nights * 76;
            apartmentPrise = nights * 77;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        } else if (nights > 14) {
            studioPrise = nights * 76;
            apartmentPrise = (nights * 77) * 0.9;
            console.log(`Apartment: ${(apartmentPrise).toFixed(2)} lv.`);
            console.log(`Studio: ${(studioPrise).toFixed(2)} lv.`);
        }
    }

}

hotelRoom("June", "8");