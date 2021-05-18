function towns(input) {

    input.forEach(line => {
        let tableLine = line.split(' | ');
        let town = {
            town: tableLine[0],
            latitude: Number(tableLine[1]).toFixed(2),
            longitude: Number(tableLine[2]).toFixed(2),
        }
        
        console.log(town);
    });
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']); 