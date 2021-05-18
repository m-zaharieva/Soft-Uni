function friendsList(input) {
    let userNames = input[0].split(', ');
    let countBlacklisted = 0; 
    let countLost = 0; 
    let index = 1; 
    let command = input[index];

    while (command !== 'Report') {
        let tempCommand = command.split(' ');
        let action = tempCommand[0];

        if (action === 'Blacklist') {
            let blacklistName = tempCommand[1];
            blacklistAction(blacklistName, userNames)
        } else if ( action === 'Error') {
            let index = Number(tempCommand[1]);
            error(index, userNames);
        } else if (action === 'Change') {
            let index = Number(tempCommand[1]);
            let newName = tempCommand[2];
            change(index, newName, userNames);
        }

        index++;
        command = input[index];
    }


    function blacklistAction(name, array) {
        let isIncluded = false;
        for (let index in array) {
            let element = array[index];
            if (element === name) {
                isIncluded = true;
                array[index] = 'Blacklisted';
                countBlacklisted++;
                console.log(`${name} was blacklisted.`);
                break;
            }
        }

        if (!isIncluded) {
            console.log(`${name} was not found.`);
        }
    }

    function error(index, array) {
        let nameToBeLost = array[index];
        if (array[index] !== 'Blacklisted' && array[index] !== 'Lost') {
            array[index] = 'Lost';
            countLost++;
            console.log(`${nameToBeLost} was lost due to an error.`);
        }
    }

    function change(index, name, array) {
        let currentName = array[index];
        if (index >= 0 && index < array.length) {
            array[index] = name; 
            console.log(`${currentName} changed his username to ${name}.`);
        }
    }

    console.log(`Blacklisted names: ${countBlacklisted}`);
    console.log(`Lost names: ${countLost}`);
    console.log(userNames.join(' '));
}


// friendsList([
//     "Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Error 1",
//     "Change 2 Mike123",
//     "Report"
// ])

friendsList(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Blacklist Eddie",
"Report"])

