function aMinerTask(input) {
    let mined = {};

    for (let index = 0; index < input.length; index+= 2) {
        let resource = input[index];
        let quantity = Number(input[index + 1]);

        if (!mined.hasOwnProperty(resource)) {
            mined[resource] = quantity;
        } else {
            mined[resource] += quantity;
        }

    }

    Object.keys(mined).forEach(element => {
        console.log(`${element} -> ${mined[element]}`);
    });
}

// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);


aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);