function solve(arr) {
    let command = arr.shift();
    let usersList = {};

    while (command !== 'Statistics') {
        let [action, username, email] = command.split('->');

        if (action === 'Add') {
            if (!usersList.hasOwnProperty(username)) {
                usersList[username] = [];
            } else {
                console.log(`${username} is already registered`);
            }

        } else if (action === 'Send') {
            if (usersList.hasOwnProperty(username)) {
                usersList[username].push(email);
            }

        } else if (action === 'Delete') {
            if (usersList.hasOwnProperty(username)) {
                delete usersList[username];
            } else {
                console.log(`${username} not found!`);
            }
        }

        command = arr.shift();
    }

    let sortedNames = Object.keys(usersList).sort((a, b) => {
        let countOfEmailsA = usersList[a].length;
        let countOfEmailsB = usersList[b].length;

        if (countOfEmailsA - countOfEmailsB > 0) {
            return -1;
        } else if (countOfEmailsA - countOfEmailsB < 0) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(`Users count: ${sortedNames.length}`);
    for (const user of sortedNames) {
            console.log(user);
        if (usersList[user].length > 0) {
            for (const email of usersList[user]) {
                console.log(` - ${email}`);
            }
        }
    }

}

// solve(["Add->Mike",
//     "Add->George",
//     "Send->George->Hello World",
//     "Send->George->Some random test mail",
//     "Send->Mike->Hello, do you want to meet up tomorrow?",
//     "Send->George->It would be a pleasure",
//     "Send->Mike->Another random test mail",
//     "Statistics"]);

solve([
    "Send->George->Hello World",
    "Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Your loan is overdue",
    "Add->Adreana",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Send->George->I'm busy",
    "Send->Adreana->I'm busy",
    "Send->Adreana->I'm not busy",
    "Send->Mike->Another random test mail",
    "Delete->George",
    "Statistics"]);

// solve(['Add->Annie',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Some random test mail',
//     'Send->Annie->Hello, do you want to meet up tomorrow?',
//     'Send->George->It would be a pleasure',
//     'Send->Annie->Another random test mail',
//     'Delete->Annie',
//     'Delete->George',
//     'Statistics']);
