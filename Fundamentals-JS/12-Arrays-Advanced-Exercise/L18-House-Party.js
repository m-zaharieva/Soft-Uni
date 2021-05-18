function houseParty(input) {
    let test = [];
    let guests = [];

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(' ');
        let name = element.shift();
        let command = element.join(' ');

        if (command === 'is going!') {
            let checkAName = checkForAName(name, guests);
            if (checkAName) {
                test.push(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }

        } else if (command === 'is not going!') {
            let checkAName = checkForAName(name, guests);
            if (checkAName) {
                let indexOfName = indexOfAName(name, guests);
                guests.splice(indexOfName, 1);
            } else {
                test.push(`${name} is not in the list!`);
            }
        }
    }

    function checkForAName(inputValue, array) {
        let isInTheList = false;
        for (let i = 0; i < array.length; i++) {
            if(inputValue === array[i]) {
                return true;
            }
        } 
        return isInTheList;
    }

    function indexOfAName(inputValue, array) {
        for (let index in array) {
            if (inputValue === array[index]) {
                return index;
            }
        }
    }

    for (let element of test) {
        console.log(element);
    }
    for (let element of guests) {
        console.log(element);
    }
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']); 