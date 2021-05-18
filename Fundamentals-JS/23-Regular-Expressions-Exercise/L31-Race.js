function solve(input) {
    let racers = input.shift().split(', ');
    let lettersPath = /[A-Za-z]/g;
    let numericPath = /[0-9]/g;
    let players = {};

    let command = input.shift();

    while (command !== 'end of race') {
        let nameArr = command.match(lettersPath);
        let numArr = command.match(numericPath);
        numArr = numArr.map(Number);

        let name = nameArr.join('');
        let distance = 0; 
        numArr.forEach(x => distance += x);

        if (racers.includes(name)) {
            if (!players.hasOwnProperty(name)) {
                players[name] = distance;
            } else {
                players[name] += distance;
            }
        }

        command = input.shift();
    }

    let sorted = Object.keys(players).sort((a,b) => {
        let distA = players[a];
        let distB = players[b];
        if (distA - distB > 0) {
            return -1;
        } else if (distA - distB < 0) {
            return 1;
        } else {
            return 0;
        }
    })


    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);