function cookingByNumbers(...operations) {
    let number = Number(operations[0]);

    for (let i = 1; i < operations.length; i++) {
        let action = operations[i];

        if (action === 'chop') {
            number /= 2;
            console.log(number);
        } else if (action === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (action === 'spice') {
            number += 1;
            console.log(number);
        } else if (action == 'bake') {
            number *= 3;
            console.log(number);
        } else if (action === 'fillet') {
            number -= 0.2*number;
            console.log(number);
        }
    }
    
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');