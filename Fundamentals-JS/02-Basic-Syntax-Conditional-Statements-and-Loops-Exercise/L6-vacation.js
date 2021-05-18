function vacation(group, type, day) {
    let groupCount = Number(group);
    let prise = 0; 

    switch (type) {
        case "Students":
            if (day === "Friday") {
                prise = groupCount * 8.45; 
            } else if (day === "Saturday") {
                prise = groupCount * 9.80;
            } else if (day === "Sunday") {
                prise = groupCount * 10.46;
            } 

            if (groupCount >= 30) {
                prise = prise * 0.85;
            }
        break;
        case "Business":
            if (groupCount >= 100) {
                groupCount = groupCount - 10
            }

            if (day === "Friday") {
                prise = groupCount * 10.90; 
            } else if (day === "Saturday") {
                prise = groupCount * 15.60;
            } else if (day === "Sunday") {
                prise = groupCount * 16;
            } 
        break; 
        case "Regular":
            if (day === "Friday") {
                prise = groupCount * 15; 
            } else if (day === "Saturday") {
                prise = groupCount * 20;
            } else if (day === "Sunday") {
                prise = groupCount * 22.50;
            } 

            if (groupCount >= 10 && groupCount <= 20) {
                prise = prise * 0.95; 
            }
        break;
    }
     
    console.log(`Total price: ${prise.toFixed(2)}`);
}

vacation("40", "Regular", "Saturday");
