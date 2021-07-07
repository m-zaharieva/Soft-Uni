function solve(arr) {
    let filteredArr = arr
    .filter((el, i) => i % 2 !== 0)
    .map(el => el * 2)
    .reverse();

    console.log(filteredArr.join(' '));

}

// solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);