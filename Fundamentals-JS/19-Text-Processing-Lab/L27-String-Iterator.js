function solve(text) {
    let words = text.split(' ');
    
    let iterator = {
        next: function() {
            let isDone = words.length === 0;
            let currentWord = words.shift();
            return {
                value: currentWord,
                done: isDone
            }
        }
    }
    let nextWord = iterator.next();
    while (!nextWord.done) {
        console.log(nextWord.value);
        nextWord = iterator.next();
    }
}

solve("Et cillum do voluptate cillum ut cupidatat aliqua.");