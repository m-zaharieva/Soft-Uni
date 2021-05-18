function solve(input) {
    let rawKey = input[0];

    let i = 1;
    let command = input[i];

    while (command !== 'Generate') {
        command = command.split('>>>');
        let action = command[0];

        if (action === 'Slice') {
            let [, startIndex, endIndex] = command;
            let start = rawKey.slice(0, startIndex);
            let end = rawKey.slice(endIndex);
            rawKey = start + end;
            console.log(rawKey);
            
        } else if (action === 'Flip') {
            let [, letterCase, startIndex, endIndex] = command;

            if (letterCase === 'Lower') {
                let string = rawKey.substring(startIndex, endIndex).toLowerCase();
                rawKey = rawKey.slice(0, startIndex) + string + rawKey.slice(endIndex);
                console.log(rawKey);

            } else if (letterCase === 'Upper') {
                let string = rawKey.substring(startIndex, endIndex).toUpperCase();
                rawKey = rawKey.slice(0, startIndex) + string + rawKey.slice(endIndex);
                console.log(rawKey);
            }
        } else if (action === 'Contains') {
            let [, substring] = command;
            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        }

        i++;
        command = input[i];
    }

    console.log(`Your activation key is: ${rawKey}`);
}

// solve([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
// ]);

  solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]);

