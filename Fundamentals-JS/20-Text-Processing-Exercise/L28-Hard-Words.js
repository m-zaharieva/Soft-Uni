function solve(input) {
    let text = input[0];
    let wordsArr = input[1].sort((a,b) => {
        let wordA = a.length; 
        let wordB = b.length;
        if (wordA - wordB > 0) {
            return -1;
        } else if (wordA - wordB < 0) {
            return 1; 
        } else {
            return 0;
        }
    });
    
    wordsArr.forEach(word => {
        let wordLength = word.length;
        if (text.includes('_'.repeat(wordLength))) {
            text = text.replace('_'.repeat(wordLength), word);
        }
    });
    
    console.log(text);
}

 solve([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);

