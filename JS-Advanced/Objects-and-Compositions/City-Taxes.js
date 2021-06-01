function createCity(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth: function (persantage) {
            this.population += Math.floor(this.population * persantage / 100);
        },
        applyRecession: function (persantage) {
            this.treasury -= Math.floor(this.treasury * persantage / 100);
        }
    }

    return city;
}

const city = createCity();
city.collectTaxes();
city.applyGrowth(5);
city.applyRecession(5); 

console.log(city);

