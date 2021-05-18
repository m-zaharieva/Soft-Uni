function solve(inputArr) {
    let textOne = inputArr[0];
    let textTwo = inputArr[1];
    let concatPass = textOne.concat(textTwo);
    let concatArr = concatPass.split('');
    let word = inputArr[2].toUpperCase();

    let indexOfVowels = [];
    for (let index in concatArr) {
        let char = concatArr[index];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            indexOfVowels.push(Number(index));
        }
    }

    for (let i = 0; i < indexOfVowels.length; i++) {
        let indexOfletter = indexOfVowels[i];
        let wordLetter = word[i % word.length];
        concatArr[indexOfletter] = wordLetter;
    }
    
    console.log(`Your generated password is ${concatArr.reverse().join('')}`);
}

solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]);

