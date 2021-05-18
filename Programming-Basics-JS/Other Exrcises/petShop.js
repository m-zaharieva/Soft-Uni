function petShop(dogs, animals){
    let dogN = Number(dogs);
    let animalsN = Number(animals);
    let dogFoodPrise = dogN * 2.5;
    let animalsFoodPrise = animalsN * 4;
    let all = dogFoodPrise + animalsFoodPrise;
    console.log(`${all} lv.`)
};

petShop(10, 12);