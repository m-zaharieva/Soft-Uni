function fuelMoney(distance, passengers, price) {
    // Needed money for that trip is ${} lv.    
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let totalPrice = neededFuel * price;

    console.log(`Needed money for that trip is ${totalPrice}lv.`);
}

fuelMoney(260, 9, 2.49);