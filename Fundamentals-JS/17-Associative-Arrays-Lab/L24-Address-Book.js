function adressBook(input) {
    
    let adressBook = {};

    input.forEach(line => {
        let [name, adress] = line.split(':');
        adressBook[name] = adress;
    });

    let sortedNames = Object.keys(adressBook).sort((a,b) => a.localeCompare(b));

    sortedNames.forEach(nameg => {
        console.log(`${nameg} -> ${adressBook[nameg]}`);
    });

    //  console.log(sortedNames);
}

adressBook(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);