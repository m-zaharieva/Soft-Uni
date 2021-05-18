function travelTime(arr) {
    let destinations = {};

    arr.forEach(offer => {
        let [country, town, cost] = offer.split(' > ');
        cost = Number(cost);
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {[town]: cost};
        } else {
            if (!destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = cost;
            } else {
                if (destinations[country][town] > cost) {
                    destinations[country][town] = cost;
                }
            }
        }
    });

    let sortedDestinations = {};

    let countrySort = Object.keys(destinations)
        .sort((a,b) => a.localeCompare(b));

    countrySort.forEach(el => {
        sortedDestinations[el] = {};
    });

    countrySort.forEach(country => {
        let townSort = Object.keys(destinations[country])
            .sort((a,b) => destinations[country][a] - destinations[country][b]);
        
        townSort.forEach(town => {
            sortedDestinations[country][town] = destinations[country][town];
        });
    })

    Object.keys(sortedDestinations).forEach(country => {
        let towns = Object.keys(sortedDestinations[country]);
        let result = '';
        towns.forEach(el => {
            result += `${el} -> ${sortedDestinations[country][el]} `
        });

        console.log(`${country} -> ${result}`);
    });

    // console.log(sortedDestinations);
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Varna > 700"
    ]);