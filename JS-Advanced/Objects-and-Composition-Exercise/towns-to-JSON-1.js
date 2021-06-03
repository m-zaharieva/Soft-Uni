function solve(arr) {
    let titles = splitRow(arr[0]);
    let rows = arr
            .slice(1)
            .map(line => splitRow(line));

    let result = [];

    rows.forEach(line => {
        let obj = reduceToObject(line, titles)
        result.push(obj);
    });

    console.log(JSON.stringify(result));

    // Functions
    function splitRow(str) {
        return str
            .split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(el => parseNumber(el))
    }
    
    function parseNumber(el) {
        return isNaN(Number(el)) ? el : Number(Number(el).toFixed(2));
    }

    function reduceToObject(valuesArr, headsArr) {
        let array = valuesArr.reduce((acc, el, i) => {
            acc[headsArr[i]] = el;
            return acc;
        }, {});

        return array;
    }

}

console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
