function goldMine(input) {
    let index = 0; //0
    let locations = Number(input[index]);
    index++; //1

    for (let i = 1; i <= locations; i++) {
        let expectationGold = Number(input[index]);
        index++; //2
        let daysPerLocation = Number(input[index]);
        index++;  //3
        let goldTotal = 0; 
        let averageGold = 0; 

        for(let j = 1; j <= daysPerLocation; j++) {
            let goldPerDay = Number(input[index]);
            index++;
            goldTotal += goldPerDay;
            averageGold = goldTotal / j;
         }

         if (averageGold >= expectationGold) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
         } else {
            console.log(`You need ${(expectationGold - averageGold).toFixed(2)} gold.`);
         }
    }
    
}

//goldMine([2, 10, 3, 10, 10, 11, 20, 2, 20, 10]);
goldMine([1, 5, 3, 10, 1, 3]);