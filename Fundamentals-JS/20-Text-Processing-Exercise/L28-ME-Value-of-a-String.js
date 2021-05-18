function solve(inputArr) {
    let totalSum = 0; 
    let text = inputArr[0];
    let textArr = text.split('');
    let caseToSearch = inputArr[1];

    // a - 97, z - 122
    if (caseToSearch === 'LOWERCASE') {
        textArr.forEach(char => {
            let charAscii = char.charCodeAt(0);
            if (charAscii >= 97 && charAscii <= 122) {
                totalSum += charAscii;
            }
        });
    // A - 65, Z - 90
    } else if (caseToSearch === 'UPPERCASE') {
        textArr.forEach(char => {
            let charAscii = char.charCodeAt(0);
            if (charAscii >= 65 && charAscii <= 90) {
                totalSum += charAscii;
            }
        });
    }

    console.log(`The total sum is: ${totalSum}`);
}

solve([ 'AC/DC', 'UPPERCASE', '' ]);