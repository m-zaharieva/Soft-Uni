function systemRegister(input) {

    let dataBase = {};

    input.forEach(line => {
        let [sysName, component, subComponent] = line.split(' | ');
        if (!dataBase.hasOwnProperty(sysName)) {
            dataBase[sysName] = {};
        }
        if (!dataBase[sysName].hasOwnProperty(component)) {
            dataBase[sysName][component] = [];
        }

        dataBase[sysName][component].push(subComponent);
    });

    let sorted = Object.keys(dataBase).sort((a, b) => Object.keys(dataBase[b]).length - Object.keys(dataBase[a]).length || a.localeCompare(b));

    sorted.forEach(system => {
        console.log(system);
        let subSort = Object.keys(dataBase[system]).sort((a,b) => {
            return dataBase[system][b].length - dataBase[system][a].length;
        });
        subSort.forEach(components => {
            console.log(`|||${components}`);
            dataBase[system][components].forEach(subComponent => {
                console.log(`||||||${subComponent}`);
            });
        });
    });
}

    


systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ]);

  // Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria
  // by alphabetical order as second criteria
  //Components must be ordered by amount of Subcomponents, in descending order.