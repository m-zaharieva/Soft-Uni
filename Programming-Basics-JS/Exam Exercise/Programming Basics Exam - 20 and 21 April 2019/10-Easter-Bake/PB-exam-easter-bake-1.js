function easterBake(input) {
  let easterBake = Number(input.shift());
    let sugarTotal = 0;
    let flourTotal = 0; 
    let maxUsedSugar = 0; 
    let maxUsedFlour = 0; 

  for (let i = 1; i <= easterBake; i++) {
      let sugar = Number(input.shift());
      let flour = Number(input.shift());

      sugarTotal += sugar;
      flourTotal += flour;

      if (sugar > maxUsedSugar) {
          maxUsedSugar = sugar;
      }

      if (flour > maxUsedFlour) {
          maxUsedFlour = flour;
      }
  }

  let sugarPackeges = Math.ceil(sugarTotal / 950);
  let flourPackeges = Math.ceil(flourTotal / 750);

    console.log(`Sugar: ${sugarPackeges}`);
    console.log(`Flour: ${flourPackeges}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`);
}

//easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);

