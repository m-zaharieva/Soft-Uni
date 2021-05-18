function solve(input) {
    let countMessages = Number(input.shift());
    let pattern = /[!]([A-Z][a-z]{2,})[!]:\[([A-Za-z]{8,})\]/;
    for (let i = 0; i < countMessages; i++) {
        let message = input[i];

        if (pattern.test(message)) {
            let match = message.match(pattern);
            let command = match[1];
            let messageToEncrypt = match[2];
            let asciiValues = [];

            for (const letter of messageToEncrypt) {
                let asciiNum = letter.charCodeAt(0);
                asciiValues.push(asciiNum);
            }

            console.log(`${command}: ${asciiValues.join(' ')}`);
            
        } else {
            console.log('The message is invalid');
        }
    }


}

// solve(["2",
//     "!Send!:[IvanisHere]",
//     "*Time@:[Itis5amAlready"]);

solve(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]);