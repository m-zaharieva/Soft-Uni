function solve(arr) {
    let headPattern = /([A-Z]+[\w\s]*[a-z]+)/g;
    let headRow = arr[0].match(headPattern);
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let line = arr[i].split(' | ');
        line[0] = (line[0].slice(2));
        line[2] = line[2].slice(0, line[2].length - 2);
        line[1] = Math.round(Number(line[1]) * 100) / 100;
        line[2] = Math.round(Number(line[2]) * 100) / 100;
        let obj = {};

        for (let j = 0; j < headRow.length; j++) {
            obj[headRow[j]] = line[j];
        }

        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);