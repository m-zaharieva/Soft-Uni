function foodForPets(input) {
    let index = 0; 
    let daysCount = Number(input[index]);  //3
    index++;  //1
    let foodAmount = Number(input[index]);  //1000
    index++  //2
    let totalFoodEaten = 0;
    let totalDogFood = 0;
    let totalCAtFood = 0;
    let bisquetes = 0;

    for(let i = 1; i <= daysCount; i++) {
        let dogEatenFoodPerDay = Number(input[index]);
        index++;  //3
        let catEatenFoodPerDay = Number(input[index]);
        index++  //4
        let totalFoodPerDay = dogEatenFoodPerDay + catEatenFoodPerDay;
        totalCAtFood += catEatenFoodPerDay; 
        totalDogFood += dogEatenFoodPerDay;
        totalFoodEaten = (totalDogFood + totalCAtFood);  
        
        if (i % 3 === 0) {
            bisquetes += totalFoodPerDay * 0.1;
        }
    }

    console.log(`Total eaten biscuits: ${(bisquetes).toFixed(0)}gr.`);
    console.log(`${(totalFoodEaten / foodAmount * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(totalDogFood / totalFoodEaten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(totalCAtFood / totalFoodEaten * 100).toFixed(2)}% eaten from the cat.`);

}

//foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);