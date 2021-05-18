function fitnessCard(moneyInput, genderInput, ageInput, sportInput) {
    let money = Number(moneyInput);
    let gender = genderInput;
    let age = Number(ageInput);
    let sport = sportInput;
    let fitnessCards = 0;

    //Всички цени на карти за ученици (възраст под 19 години вкл.) са с 20% намаление.

    if (age > 19 && gender === "m") {
        switch (sport) {
            case "Gym": fitnessCards = 42; break;
            case "Boxing": fitnessCards = 41; break;
            case "Yoga": fitnessCards = 45; break;
            case "Zumba": fitnessCards = 34; break;
            case "Dances": fitnessCards = 51; break;
            case "Pilates": fitnessCards = 39; break;
        }
        if (fitnessCards <= money) {
            console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
            console.log(`You don't have enough money! You need $${(fitnessCards - money).toFixed(2)} more.`);
        }
    } else if (age > 19 && gender === "f") {
        switch (sport) {
            case "Gym": fitnessCards = 35; break;
            case "Boxing": fitnessCards = 37; break;
            case "Yoga": fitnessCards = 42; break;
            case "Zumba": fitnessCards = 31; break;
            case "Dances": fitnessCards = 53; break;
            case "Pilates": fitnessCards = 37; break;
        }
        if (fitnessCards <= money) {
            console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
            console.log(`You don't have enough money! You need $${(fitnessCards - money).toFixed(2)} more.`);
        }
    } else if (age <= 19 && gender === "f") {
        switch (sport) {
            case "Gym": fitnessCards = 35 * 0.8; break;
            case "Boxing": fitnessCards = 37 * 0.8; break;
            case "Yoga": fitnessCards = 42 * 0.8; break;
            case "Zumba": fitnessCards = 31 * 0.8; break;
            case "Dances": fitnessCards = 53 * 0.8; break;
            case "Pilates": fitnessCards = 37 * 0.8; break;
        }
        if (fitnessCards <= money) {
            console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
            console.log(`You don't have enough money! You need $${(fitnessCards - money).toFixed(2)} more.`);
        }

    } else if (age <= 19 && gender === "m") {
        switch (sport) {
            case "Gym": fitnessCards = 42 * 0.8; break;
            case "Boxing": fitnessCards = 41 * 0.8; break;
            case "Yoga": fitnessCards = 45 * 0.8; break;
            case "Zumba": fitnessCards = 34 * 0.8; break;
            case "Dances": fitnessCards = 51 * 0.8; break;
            case "Pilates": fitnessCards = 39 * 0.8; break;
        }
        if (fitnessCards <= money) {
            console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
            console.log(`You don't have enough money! You need $${(fitnessCards - money).toFixed(2)} more.`);
        }
    }


}

//fitnessCard("50", "m", "23", "Gym");
fitnessCard("20", "f", "15", "Yoga");