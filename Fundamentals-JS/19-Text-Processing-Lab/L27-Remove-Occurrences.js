function solve(word, string) {
    
    while(string.indexOf(word) > -1) {
        string = string.replace(word, '');    
    }

    console.log(string);
    
}

solve('ice', 'kicegiciceeb');