function solve(arr) {
    
    let sortedArr = arr.sort((a,b) => a.localeCompare(b));

    let currentLetter = '';
    sortedArr.forEach(line => {
        let [product, prise] = line.split(' : ');
        let startLetter = product[0];
        if (currentLetter !== startLetter) {
            currentLetter = startLetter;
            console.log(currentLetter);
        }

        console.log(`  ${product}: ${Number(prise)}`);
    });
    
    // sortedArr.forEach(product => {
    //     let startLetter = product[0];
    //     if (currentLetter !== startLetter) {
    //         currentLetter = startLetter;
    //         console.log(currentLetter);
    //     }

    //     console.log(`  ${product}`);

    // });
    
}

solve(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);