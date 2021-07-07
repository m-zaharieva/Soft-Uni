function createCity(name, population, treasury) {
    let city = {
        name, 
        population,
        treasury
    }

    return city;
}

console.log(createCity('Tortuga', 7000, 15000));