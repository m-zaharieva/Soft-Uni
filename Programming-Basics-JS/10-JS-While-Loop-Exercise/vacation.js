function vacation(input) {
    let moneyForVacation = Number(input.shift());
    let possesedMoney = Number(input.shift());
    let days = 0; 
    let spend = 0; 

    let action = input.shift();
    let money = Number(input.shift()); // 150

//["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]
    
while(possesedMoney < moneyForVacation) {
        if (action === "save") {
            possesedMoney += money; 
            spend = 0;
        } else if (action === "spend") {
            spend++; 
            possesedMoney -= money; // 150 - 50 - 50 + 100 + 100
               
            if (possesedMoney < 0) {
                    possesedMoney = 0;
                }
        }
        days++; //4
        if (spend >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`); 
            break;
        }
        action = input.shift();
        money = Number(input.shift()); // -50 //  100
    }

    if (possesedMoney >= moneyForVacation) {
        console.log(`You saved the money for ${days} days.`);
    } 

}

//vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
//vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]); 