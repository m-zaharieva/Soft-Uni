function solve(inputArr) {
    let rawString = inputArr.shift(); 

    let index = 0; 
    let command = inputArr[index];

    while (command !== 'Complete') {
        if (command === 'Make Upper') {
            rawString = rawString.toUpperCase();
            console.log(rawString);

        } else if (command === 'Make Lower') {
            rawString = rawString.toLowerCase();
            console.log(rawString);

        } else if (command.includes('GetDomain')) {
            let [action, count] = command.split(' ');
            count = Number(count);
            let domain = rawString.substring(rawString.length - count);
            console.log(domain);

        } else if (command === 'GetUsername') {
            let indexOfEta = rawString.indexOf('@');
            if (indexOfEta > -1) {
                let username = rawString.substring(0, indexOfEta);
                console.log(username);
            } else {
                console.log(`The email ${rawString} doesn't contain the @ symbol. `);
            }

        } else if (command.includes('Replace')) {
            let [action, char] = command.split(' ');
            while(rawString.includes(char)) {
                rawString = rawString.replace(char, '-');
            }
            console.log(rawString);

        } else if (command === 'Encrypt') {
            let asciiValues = [];
            for (const letter of rawString) {
                let ascii = letter.charCodeAt(0);
                asciiValues.push(ascii);
            }

            console.log(asciiValues.join(' '));
        }


        index++; 
        command = inputArr[index];
    }
}

solve(["AnotherMail.com", 
"Make Lower", 
"GetUsername", 
"Replace a", 
"Complete"]) ;