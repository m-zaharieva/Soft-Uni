function easterBake(input) {
    index = 0;
    let easterBakeCount = Number(input[index]);
    index++;
    let sugarTotal = 0;
    let flourTotal = 0;
    let maxUsedFlour = 0;
    let MaxUsedSugar = 0;

    for (let i = 1; i <= easterBakeCount; i++) {
        let sugar = Number(input[index]);
        index++;
        let flour = Number(input[index]);
        index++;
        sugarTotal += sugar;
        flourTotal += flour;

        if (sugar > MaxUsedSugar) {
            MaxUsedSugar = sugar;
        }

        if (flour > maxUsedFlour) {
            maxUsedFlour = flour;
        }
    }

    let sugarPackeges = Math.ceil(sugarTotal / 950);
    let flourPackeges = Math.ceil(flourTotal / 750);

    console.log(`Sugar: ${sugarPackeges}`);
    console.log(`Flour: ${flourPackeges}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${MaxUsedSugar} grams.`);
}

//easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);

