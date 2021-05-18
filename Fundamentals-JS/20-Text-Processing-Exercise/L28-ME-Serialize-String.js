function solve(text) {
    let chars = {};
    let charArr = text[0].split('');

    for (let index in charArr) {
        let char = charArr[index];

        if (!chars.hasOwnProperty(char)) {
            chars[char] = [index];
        } else {
            chars[char].push(index);
        }
    }

    Object.keys(chars).forEach(char => {
        console.log(`${char}:${chars[char].join('/')}`);
    })
}

solve([ 'abababa', '' ]);