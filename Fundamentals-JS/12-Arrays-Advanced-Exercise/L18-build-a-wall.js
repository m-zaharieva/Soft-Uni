function buildAWall(input) {
    let wallHeightSections = input.map(x => Number(x));
    let concretePerDay = [];

    let smallestHeight = Math.min(...wallHeightSections);
    let daysToBuild = 30 - smallestHeight;

    for (let i = 0; i < daysToBuild; i++) {
        concretePerDay[i] = 0;
    }

    for (let i = 0; i < wallHeightSections.length; i++) {

        let index = 0;
        while (wallHeightSections[i] < 30) {
            concretePerDay[index] += 195;
            index++;
            wallHeightSections[i]++;
        }
    }


    let totalConcrete = 0;
    for (let i = 0; i < concretePerDay.length; i++) {
        let element = concretePerDay[i];
        totalConcrete += element;
    }

    let totalCost = totalConcrete * 1900;


    console.log(concretePerDay.join(', '));
    console.log(`${totalCost} pesos`);


}

buildAWall([21, 25, 28]);