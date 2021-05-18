function paintingEggs(eggsSizeInput, eggsColorInput, eggsSetsInput) {
    let eggSize = eggsSizeInput;
    let eggColor = eggsColorInput;
    let eggSets = Number(eggsSetsInput);
    let eggPrise = 0;

    switch (eggSize) {
        case "Large":
            switch (eggColor) {
                case "Red": eggPrise = eggSets * 16; break;
                case "Green": eggPrise = eggSets * 12; break;
                case "Yellow": eggPrise = eggSets * 9; break;
            }
            break;
        case "Medium":
            switch (eggColor) {
                case "Red": eggPrise = eggSets * 13; break;
                case "Green": eggPrise = eggSets * 9; break;
                case "Yellow": eggPrise = eggSets * 7; break;
            }
            break;
        case "Small":
            switch (eggColor) {
                case "Red": eggPrise = eggSets * 9; break;
                case "Green": eggPrise = eggSets * 8; break;
                case "Yellow": eggPrise = eggSets * 5; break;
            }
            break;
    }

    let expences = eggPrise * 0.35;
    let total = eggPrise - expences; 

    console.log(`${total.toFixed(2)} leva.`);
}

paintingEggs("Large", "Red", "7");