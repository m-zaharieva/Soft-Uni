function easterShop(...input) {
    index = 0; 
    let eggs = Number(input[index]);
    index++;

    let acction = input[index];
    index++; 

    let amount = Number(input[index]);
    index++;

    let boughtEggs = 0;
    let filledEggs = 0;
    let egssLeftInsTore = 0;
    
    while (acction !== "Close") {
        if (acction === "Buy") {
            boughtEggs += amount;
        } else if (acction === "Fill") {
            filledEggs += amount;
        }

        egssLeftInsTore = eggs - boughtEggs + filledEggs;

        if (egssLeftInsTore < 0) {
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${amount + egssLeftInsTore}.`);
            return;
        }

        acction = input[index];
        index++; 
    
        amount = Number(input[index]);
        index++;
    }

    console.log("Store is closed!");
    console.log(`${boughtEggs} eggs sold.`);


}

easterShop("13", "Buy", "8", "Fill", "3", "Buy", "10");
//easterShop("20", "Fill", "30", "Buy", "15", "Buy", "20", "Close");
