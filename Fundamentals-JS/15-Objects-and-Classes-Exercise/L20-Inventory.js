function inventory(input) {
    let heroes = [];

    class Hero {
        constructor(name, level, items) {
            this.Hero = name;
            this.level = level;
            this.items = items;
        }
    }

    input.forEach(heroData => {
        let tokens = heroData.split(' / ');
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let items = tokens.slice(2);
        items = items[0].split(', ').sort((a,b) => a.localeCompare(b)).join(', ');

        let hero = new Hero(heroName, heroLevel, items);

        heroes.push(hero);

    });

    //console.log(heroes);

    let levels = [];
    heroes.forEach(obj => {
        let level = obj.level;
        levels.push(level);
    });

    let filteredLevels = levels.sort((a, b) => (a - b));

    for (let element of filteredLevels) {
        heroes.forEach(obj => {
            if (obj.level === element) {
                printObjrct(obj);
            }
        })
    }

    function printObjrct(object) {
        for (let prop in object) {
            if (prop === 'Hero') {
                console.log(`${prop}: ${object[prop]}`);
            } else {
                console.log(`${prop} => ${object[prop]}`);
            }
        }
    }

}

inventory(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);


// The output is all of the data for all the heroes you’ve stored sorted ascending by level 
// and the items are sorted alphabetically. 

// The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}