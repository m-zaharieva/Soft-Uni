function treckingMania(input) {
    let groups = input[0]; // 10;
    let peopleInAGrounp = 0;
    let totalPeopleCount = 0;
    let trackingMusala = 0;
    let trackingMonblan = 0; 
    let trackingKilimandjaro = 0; 
    let trackingK2 = 0;
    let tranckingEverest = 0; 

    for (let index = 1; index < input.length; index++) {
        peopleInAGrounp = input[index];
        totalPeopleCount += peopleInAGrounp;

        if (peopleInAGrounp <= 5) {
            trackingMusala += peopleInAGrounp;
        } else if (peopleInAGrounp >= 6 && peopleInAGrounp <= 12) {
            trackingMonblan += peopleInAGrounp;
        } else if (peopleInAGrounp >= 13 && peopleInAGrounp <= 25) {
            trackingKilimandjaro += peopleInAGrounp;
        } else if (peopleInAGrounp >= 26 && peopleInAGrounp <= 40) {
            trackingK2 += peopleInAGrounp;
        } else if (peopleInAGrounp >= 41) {
            tranckingEverest += peopleInAGrounp;
        }
    }

    let percentMusala = (trackingMusala / totalPeopleCount * 100);
    let percentMonblan = (trackingMonblan / totalPeopleCount * 100);
    let percentKilimandgaro = (trackingKilimandjaro / totalPeopleCount * 100);
    let percentK2 = (trackingK2 / totalPeopleCount * 100);
    let percentEverest = (tranckingEverest / totalPeopleCount * 100);


    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimandgaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);


}

treckingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
//treckingMania([5, 25, 41, 31, 250, 6]);
