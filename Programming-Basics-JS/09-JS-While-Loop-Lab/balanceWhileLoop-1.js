function balance(input) {

    let deposit = input[0]; // "5.51"
    let balance = 0; 
    let index = 1;
    while (deposit !== "NoMoreMoney") {
        deposit = Number(deposit); 

        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        }

        balance += deposit;
        console.log(`Increase: ${deposit}`);
        deposit = input[index];
        index++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

balance(["5.51", "69.42", "100", "NoMoreMoney"]);