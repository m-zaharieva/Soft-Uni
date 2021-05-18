function cleverLily (arg1, arg2, arg3) {
    let age = Number(arg1);
    let washingMachinePrice = Number(arg2);
    let toyPrice = Number(arg3);
    let moneyPerYear = 0;
    let moneyTotal = 0;
    let moneyToys = 0;
    let result = 0;

    for (let i = 1; i <= age; i++) {
        if(i % 2 === 0) {
            moneyPerYear += 10;
            moneyTotal += (moneyPerYear - 1); 
        } else {
            moneyToys += toyPrice;
        }
    }
    result = moneyTotal + moneyToys

    if (result >= washingMachinePrice) {
        console.log(`Yes! ${(result - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - result).toFixed(2)}`);
    }
}

cleverLily("21", "1570.98", "3");