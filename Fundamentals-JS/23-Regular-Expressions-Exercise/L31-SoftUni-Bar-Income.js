function solve(input) {
    let stringPattern = /[%](?<name>[A-Z][a-z]+)[%][^$\|%\.\d]*[<](?<product>\w+)[>][^$\|%\.\d]*[\|](?<quantity>\d+)[\|][^$\|%\.\d]*(?<prise>\d*[\.]*\d*)[$]/;
    let totalIncome = 0; 

    let index = 0;
    let command = input[index];
    // [result, group 1, group 2, ..., index: i, input: 'Original string', groups:{key: value, key, value, ..}]
    while (command !== 'end of shift') {
        if (stringPattern.test(command)) {
            let result = stringPattern.exec(command);
            let name = result[1];
            let product = result[2];
            let quantity = Number(result[3]);
            let prise = Number(result[4]);
            let totalPrise = quantity * prise;
            totalIncome += totalPrise;
            
            console.log(`${name}: ${product} - ${totalPrise.toFixed(2)}`);
        } 

        index++;
        command = input[index];
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ]);

// solve([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'
//   ]);