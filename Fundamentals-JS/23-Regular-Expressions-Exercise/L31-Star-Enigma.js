function solve(input) {
    let countMessaes = Number(input.shift());
    let lettersToCpuntPattern = /[straSTRA]/g;
    let pattern = /@(?<planet>[A-za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[A|D])![^@\-!:>]*\->(?<soldierCount>\d+)/;
    let decreptedMessages = [];
    let planets = { attacked: [], destroyed: [] };

    // decripting a message and creating decrepted array
    input.forEach(message => {
        let lettersToCount = message.match(lettersToCpuntPattern);
        let decrKey = lettersToCount.length;
        let tempMess = '';
        for (let i = 0; i < message.length; i++) {
            let num = message[i].charCodeAt(0);
            num = num - decrKey;
            let decLetter = String.fromCharCode(num);
            tempMess += decLetter;
        }
        decreptedMessages.push(tempMess);
    });

    // using pattern to split the messages
    decreptedMessages.forEach(message => {
        if (pattern.test(message)) {
            let token = message.match(pattern);
            if (token.groups.attackType === 'A') {
                planets.attacked.push(token.groups.planet);
            } else if (token.groups.attackType === 'D') {
                planets.destroyed.push(token.groups.planet);
            }
        }
    });

    Object.keys(planets).forEach(action => {
        let actionsArr = planets[action];
        if (action === "attacked") {
            console.log(`Attacked planets: ${actionsArr.length}`);
        } else if (action === "destroyed") {
            console.log(`Destroyed planets: ${actionsArr.length}`);
        }
        let sortedArr = actionsArr.sort((a, b) => a.localeCompare(b));
        sortedArr.forEach(planet => console.log(`-> ${planet}`));
    })
}

// solve([
//     '2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR'
// ]);

solve([
    "3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR"
]);
