function careOfPuppy(input) {
    let boughtFoodKg = Number(input[0]) * 1000;

    let index = 1;
    let eatenFood = input[index];

    while (eatenFood !== "Adopted") {
        eatenFood = Number(input[index]);
        boughtFoodKg -= eatenFood;

        index++;
        eatenFood = input[index];
        
    }

    if (boughtFoodKg >= 0) {
        console.log(`Food is enough! Leftovers: ${boughtFoodKg} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(boughtFoodKg)} grams more.`);
    }

}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
//careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
//careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);



