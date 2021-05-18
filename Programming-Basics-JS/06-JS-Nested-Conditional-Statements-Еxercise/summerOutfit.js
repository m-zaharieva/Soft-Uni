function summerOutfit(degreeInput, dayTime) {
    let degree = Number(degreeInput);
    let time = dayTime;

    if (degreeInput >= 10 && degree <= 18) {
        switch (time){
            case "Morning": console.log(`It's ${degree} degrees, get your Sweatshirt and Sneakers.`); break;
            case "Afternoon": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
            case "Evening": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if (degree > 18 && degree <= 24) {
        switch (time) {
            case "Morning": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
            case "Afternoon": console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`); break;
            case "Evening": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if (degree >= 25) {
        switch (time) {
            case "Morning": console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`); break;
            case "Afternoon": console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`); break;
            case "Evening": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
        }
    }
}

summerOutfit("16", "Morning");