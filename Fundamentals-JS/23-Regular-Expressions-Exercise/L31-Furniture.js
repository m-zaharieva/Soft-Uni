function solve(input) {
    let pattern = /[>]{2}([A-Z]+[a-z]*)[<]{2}(\d+[\.]?\d+)[!](\d+)\b/;
    let total = 0;
    console.log('Bought furniture:');
    input.forEach(product => {
        if (pattern.test(product)) {
            let validProduct = product.match(pattern);
            total += Number(validProduct[2]) * Number(validProduct[3]);
            console.log(validProduct[1]);
        }
    });

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);