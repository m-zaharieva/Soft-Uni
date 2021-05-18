// function solve(input) {
//     // +359 2 222 2222
//     // +359-2-222-2222
//     let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    
//    input.forEach(text => {
//        let matches = text.match(pattern);
//         console.log(matches.join(', '));
//    });

// }

function solve(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validPhones = [];
    
    let validPhone = pattern.exec(input[0]);

    while (validPhone !== null) {
        validPhones.push(validPhone[0]);

        validPhone = pattern.exec(input[0]);
    }

    console.log(validPhones.join(', '));

}

solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ]);