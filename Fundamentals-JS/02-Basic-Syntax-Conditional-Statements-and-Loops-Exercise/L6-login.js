function logIn(input) {
    let userName = input[0];
    let passWprd = userName.split('').reverse().join('');
    let logsCounter = 1; 

    for (let i = 1; i <= input.length - 1; i++) {
        if (input[i] === passWprd) {
            console.log(`User ${userName} logged in.`);
            logsCounter++
            break;
        } else {
            console.log('Incorrect password. Try again.');
            logsCounter++
        }

        if (logsCounter > 3) {
            console.log(`User ${userName} blocked!`);
            break;
        }
    }

}
// Incorrect password. Try again.
// User Acer logged in.
// User sunny blocked!
logIn(['sunny','rainy','cloudy','sunny','cloudy','sunny','not sunny']);


// function login(input) {
//     let username = input.shift();
//     let correctPass = username.split('').reverse().join('');
//     for (let i = 0; i < input.length; i++) {
//         let pass = input[i];

//         if (pass === correctPass) {
//             console.log(`User ${username} logged in.`);
//         } else {
//             if (i === 3) {
//                 console.log(`User ${username} blocked!`);
//                 break;
//             }
//             console.log('Incorrect password. Try again.');
//         }
//     }
// }

// login(['Acer', 'login', 'go', 'let me in', 'recA']);