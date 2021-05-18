function solve(numberInput) {
    let number = Number(numberInput);
    let calculation = 1; 
    while (calculation <= numberInput) {
        console.log(calculation);
        calculation = calculation * 2 + 1; 
    }
}

solve(["31"]);