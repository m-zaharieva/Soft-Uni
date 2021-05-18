function solve(input) {
    let token = input
        .split(' ')
        .filter(word => word.startsWith('#') && word.length > 1)
        .map(word => word = word.substring(1));

    token.forEach(word => {
        let wordArr = word.split('');
        let isValid = true;
        wordArr.forEach(char => {
            let charToAscii = char.charCodeAt(0);
            if (charToAscii < 64 || charToAscii > 91 && charToAscii < 96 || charToAscii > 123) {
                isValid = false;
                return;
            }
        });
        if (isValid) {
            console.log(word);
        }
    });
}

solve('Nowadays everyone uses # to tag a #special word in #soci6alMedia');