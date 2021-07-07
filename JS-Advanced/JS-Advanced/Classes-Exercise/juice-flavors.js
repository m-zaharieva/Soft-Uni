function juiceFlavors(juicesArray) {
    let juices = new Map();
    let bottles = new Map();
    for (let index = 0; index < juicesArray.length; index++) {
        let [flavor, quantity] = juicesArray[index].split(' => ');
        quantity = Number(quantity);

        if (!juices.has(flavor)) {
            juices.set(flavor, 0)
        }

        juices.set(flavor, juices.get(flavor) + quantity);
        
        if (juices.get(flavor) >= 1000) {
            let bottlesCount = Math.trunc(juices.get(flavor) / 1000);
            let leftOver = juices.get(flavor) % 1000;

            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0);
            }

            bottles.set(flavor, bottles.get(flavor) + bottlesCount)

            juices.set(flavor, leftOver);
        }

    }

    [...bottles.entries()].forEach(bottle => {
        console.log(`${bottle[0]} => ${bottle[1]}`);
    })
}

// juiceFlavors(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']);


juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
