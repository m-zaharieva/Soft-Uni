function solve(inputArr) {
    let string = [];

    let index = 0; 
    let command = inputArr[index];

    while (command !== 'end') {
        let [letter, indexes] = command.split(':');
        let indexesArr = indexes.split('/');
        indexesArr = indexesArr.map(Number);

        indexesArr.forEach(indexLetter => {
            string[indexLetter] = letter;
        });


        index++;
        command = inputArr[index];
    }

    console.log(string.join(''));

}


solve([ 'a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end' ]);