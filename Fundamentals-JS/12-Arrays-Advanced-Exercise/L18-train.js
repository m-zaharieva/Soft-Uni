function train(myArray) {
    let firstElement = myArray.shift().split(' ');
    let passangersInAWagon = firstElement.map(Number);

    let maxCapacity = Number(myArray.shift());

    for (let i = 0; i < myArray.length; i++) {
        let command = myArray[i].split(' ');

        if (command.length === 2) {
            let action = command[0];
            let passangers = Number(command[1]);

            passangersInAWagon.push(passangers);
            
        } else if (command.length === 1) {
            let passangers = Number(command[0]);

            for (let i = 0; i < passangersInAWagon.length; i++) {
                if (passangersInAWagon[i] + passangers <= maxCapacity) {
                    passangersInAWagon[i] += passangers;
                    break;
                }
            }
        }
    }

    console.log(passangersInAWagon.join(' '));
 


}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);