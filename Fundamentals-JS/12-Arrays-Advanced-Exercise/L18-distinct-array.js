function distinctArray(input) {

    let filteredNumbers = input.filter((item, index) => input.indexOf(item) === index);

    console.log(filteredNumbers.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);