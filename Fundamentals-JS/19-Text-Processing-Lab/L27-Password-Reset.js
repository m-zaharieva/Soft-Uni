function solve(input) {
    let password = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== 'Done') {
        if (command === 'TakeOdd') {
            let result = '';
            for (let i = 1; i < password.length; i+=2) {
                result += password[i];
            }
            console.log(result);
            password = result;
        }

        if (command.includes('Cut')) {
            let [ ,startIndex, length] = command.split(' ');
            startIndex = Number(startIndex);
            length = Number(length);

            let substring = password.substring(startIndex, startIndex + length);
            password = password.replace(substring, '');

            console.log(password);
        }

        if (command.includes('Substitute')) {
            let [ ,substring, substitute] = command.split(' ');
            if (!password.includes(substring)) {
                console.log(`Nothing to replace!`);
            } else {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            }
        }

        index++;
        command = input[index];
    }

    console.log(`Your password is: ${password}`);
}

solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]);