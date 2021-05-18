function solve(input) {
    let index = 0;
    let command = input[index];
    let allUsers = {};
    let userCount = 0;

    while (command !== 'Statistics') {

        if (command.startsWith('Add')) {
            let [, username] = command.split('->');
            if (!allUsers.hasOwnProperty(username)) {
                allUsers[username] = [];
                userCount++;
            } else {
                console.log(`${username} is already registered`);
            }

        } else if (command.startsWith('Send')) {
            let [, username, email] = command.split('->');
            if (allUsers.hasOwnProperty(username)) {
                allUsers[username].push(email);
            }

        } else if (command.startsWith('Delete')) {
            let [, username] = command.split('->');

            if (allUsers.hasOwnProperty(username)) {
                delete allUsers[username];
                userCount--;
            } else {
                console.log(`${username} not found!`);
            }
        }
        index++;
        command = input[index];
    }

    console.log(`Users count: ${userCount}`);

    let sorted = Object.keys(allUsers).sort((a, b) => {
        let countA = allUsers[a].length;
        let countB = allUsers[b].length;
        if (countA - countB > 0) {
            return -1;
        } else if (countA - countB < 0) {
            return 1;
        } else {
            a.localeCompare(b);
        }
    });

    sorted.forEach(user => {
        console.log(user);
        for (const email of allUsers[user]) {
            console.log(` - ${email}`);
        }
    });

}

// solve(["Add->Mike",
//     "Add->George",
//     "Send->George->Hello World",
//     "Send->George->Some random test mail",
//     "Send->Mike->Hello, do you want to meet up tomorrow?",
//     "Send->George->It would be a pleasure",
//     "Send->Mike->Another random test mail",
//     "Statistics"]);

solve(["Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Your loan is overdue",
    "Add->Mike",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Delete->Peter",
    "Send->George->I'm busy",
    "Send->Mike->Another random test mail",
    "Delete->George",
    "Statistics"]);