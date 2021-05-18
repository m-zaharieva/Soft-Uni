function catalogue(input) {
    let products = [];
    input.forEach(product => {
        let tokens = product.split(' : ');
        let name = tokens[0];
        let prise = Number(tokens[1]);
        let item = {};
        item.name = name;
        item.prise = prise;

        products.push(item);
    });

    products.sort((a,b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (let element of products) {
        let currentName = element['name'];
        let nameToUpper = currentName.toUpperCase();
        let firstLetter = nameToUpper[0];
        if (firstLetter !== currentLetter) {
            console.log(firstLetter);
            currentLetter = firstLetter;
            console.log(`  ${element.name}: ${element.prise}`);
        } else {
            console.log(`  ${element.name}: ${element.prise}`);
        }
    }

}

catalogue([
    'Appricot : 20.4', 
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);

    