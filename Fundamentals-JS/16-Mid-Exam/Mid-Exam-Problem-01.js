function problemOne(biscuitsPerWorker, workers, competingFactory) {
    let bisquitsSum = 0; 

    for (let day = 1; day <= 30; day++) {
        let besquitsPerDay = biscuitsPerWorker * workers;
        if (day % 3 === 0) {
            besquitsPerDay = Math.floor(besquitsPerDay * 0.75); 
            bisquitsSum += besquitsPerDay;
        } else {
            bisquitsSum += besquitsPerDay;
        }
    }

    let difference = Math.abs(bisquitsSum - competingFactory);
    let persentage = difference/competingFactory * 100;
    console.log(`You have produced ${bisquitsSum} biscuits for the past month.`);

    if (bisquitsSum > competingFactory) {
        console.log(`You produce ${persentage.toFixed(2)} percent more biscuits.` );
    } else if (bisquitsSum < competingFactory) {
        console.log(`You produce ${persentage.toFixed(2)} percent less biscuits.`);
    }

}

problemOne(78, 8, 16000);

    // 78 - biscuits produced per day per worker.
    // 8 = the count of the workers in your factory. 
    // 16000 - the number of bescuits the competing factory produces for 30 days.  
    
    // calculate the production of your factory for 30 days.
    // every third day the workers produce only 75% of the usual production. 
    // there can only be a whole biscuit after making calculations for each day - format to the loweer number

    // `You have produced ${countBiscuits} biscuits for the past month.`
    // `You produce ${persentage} percent more biscuits.` 
    // `You produce ${persentage} percent less biscuits.` 