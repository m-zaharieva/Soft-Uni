function createCity(array) {
    let townPopulation = {};

    array.forEach(el => {
        let [town, population] = el.split(' <-> ');
        if (townPopulation[town]) {
            townPopulation[town] += Number(population)
        } else {
            townPopulation[town] = Number(population);
        }
    });

    Object.keys(townPopulation).forEach(town => {
        console.log(`${town} : ${townPopulation[town]}`);
    })
    
}

createCity([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);