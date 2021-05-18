function neighborhoods(array) {
    let neighborhoodsArr = array.shift().split(', ');
    
    let map = new Map();
    
    neighborhoodsArr.forEach(line => {
        map.set(line, []);
    });

    for (let element of array) {
        let [neightborhood, person] = element.split(' - ');

        if (map.has(neightborhood)) {
            let currentPeople = map.get(neightborhood);
            currentPeople.push(person);
            map.set(neightborhood, currentPeople);
        }
    }

    let mapEntries = Array.from(map.entries());
    let sortedMap = mapEntries.sort((a, b) => {
        let peopleCountA = a[1].length;
        let peopleCountB = b[1].length;
        return peopleCountB - peopleCountA;
    });

    for (let kvp of sortedMap) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (let name of kvp[1]) {
            console.log(`--${name}`);
        }
    }
    // console.log(sortedMap);

}

neighborhoods(
    ['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);