function solve(arr) {
    let heroes = [];

    arr.forEach(line => {
        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', ') : [];
        let heroObj = {
            name: name,
            level: Number(level),
            items: items
        };

        heroes.push(heroObj);
    });

    console.log(JSON.stringify(heroes));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);