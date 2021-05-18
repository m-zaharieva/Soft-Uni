function easterBakery(flourPriceInput, flourKgInput, sugarKgInput, eggsShellInput, yeastInput) {
    let flourPrice = Number(flourPriceInput);
    let flourAmount = Number(flourKgInput);
    let sugarAmount = Number(sugarKgInput);
    let eggsShell = Number(eggsShellInput);
    let yeastCount = Number(yeastInput);

    let sugarPrise = flourPrice * 0.75;
    let eggsShellPrise = flourPrice * 1.10;
    let yeastPrise = sugarPrise * 0.20;

    let totalFlourMoney = flourPrice * flourAmount;
    let totalSugarPrise = sugarAmount * sugarPrise;
    let totalEggsPrise = eggsShell * eggsShellPrise;
    let totalYeastPrise = yeastCount * yeastPrise;
    let result = totalFlourMoney + totalSugarPrise + totalEggsPrise + totalYeastPrise;

    console.log(result.toFixed(2));

    
}

easterBakery("50", "10", "3.5", "6", "1");