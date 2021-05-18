function easterDecoration(input) {
    let index = 0;
    let bayers = input[index];
    index++;
    let finalPrise = 0;

    for (let i = 1; i <= bayers; i++) {
        let product = input[index];
        index++;
        let productAmount = 0;
        let tempPrise = 0;

        while (product !== "Finish") {
            productAmount++;
            switch (product) {
                case "basket": tempPrise += 1.50; break;
                case "wreath": tempPrise += 3.80; break;
                case "chocolate bunny": tempPrise += 7; break; 
            }
            product = input[index];
            index++;
        }

        if (productAmount % 2 === 0) {
            tempPrise *= 0.8;
        }
        
        finalPrise += tempPrise; 
        console.log(`You purchased ${productAmount} items for ${tempPrise.toFixed(2)} leva.`);
    }

    console.log(`Average bill per client is: ${(finalPrise / bayers).toFixed(2)} leva.`);
}

//easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);

// • При получаване на командата "Finish" да се отпечата един ред:
// ◦ "You purchased {броя на покупките} items for {крайната цена} leva."
// • Накрая, след като всички клиенти приключат с покупките, да се отпечата на един ред
// ◦ "Average bill per client is: {средно аритметично на парите които е похарчил всеки един клиент} leva."
// Всички пари трябва да бъдат форматирани до втората цифра след десетичния знак.