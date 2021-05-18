function fruitShop (fruitInput, dayInput, quantityInput) {
    let fruit = fruitInput;
    let day = dayInput;
    let quantity = Number(quantityInput);

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": 
            switch (fruit) {
                case "banana": console.log((quantity * 2.50).toFixed(2)); break;
                case "apple": console.log((quantity * 1.20).toFixed(2)); break;
                case "orange": console.log((quantity * 0.85).toFixed(2)); break;
                case "grapefruit": console.log((quantity * 1.45).toFixed(2)); break;
                case "kiwi": console.log((quantity * 2.70).toFixed(2)); break;
                case "pineapple": console.log((quantity * 5.50).toFixed(2)); break;
                case "grapes": console.log((quantity * 3.85).toFixed(2)); break;
                default: console.log("error"); break;
            }
        break; 
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": console.log((quantity * 2.70).toFixed(2)); break;
                case "apple": console.log((quantity * 1.25).toFixed(2)); break;
                case "orange": console.log((quantity * 0.90).toFixed(2)); break;
                case "grapefruit": console.log((quantity * 1.60).toFixed(2)); break;
                case "kiwi": console.log((quantity * 3.00).toFixed(2)); break;
                case "pineapple": console.log((quantity * 5.60).toFixed(2)); break;
                case "grapes": console.log((quantity * 4.20).toFixed(2)); break;
                default: console.log("error"); break;
            }
        break;             
        default: console.log("error"); break;
    }
}

fruitShop("beer", "Sunday", "3")