function solve(arr) {
    let pattern = /([A-Za-z0-9.]+)/g;

    arr.forEach(line => {
        let tableRow = line.match(pattern);
        console.log(tableRow);
    });


}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);