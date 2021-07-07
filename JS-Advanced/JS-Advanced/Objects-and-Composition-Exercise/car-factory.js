function carFactory(obj) {
    let engine = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }

    let newCar = {};
    newCar.model = obj.model;
    newCar.engine = {};
    newCar.carriage = {};
    newCar.carriage.type = obj.carriage;
    newCar.carriage.color = obj.color;
    newCar.wheels = [];


    if (obj.power === 90 || obj.power < 90 || obj.power - 90 < 15) {
        newCar.engine.power = 90;
        newCar.engine.volume = 1800;
    } else if (obj.power === 120 || 
              (obj.power < 120 && 120 - obj.power <= 15) || 
              (obj.power < 200 && 200 - obj.power > 40)) {
        newCar.engine.power = 120;
        newCar.engine.volume = 2400;
    } else if (obj.power === 200 || obj.poer > 200 || (obj.power < 200 && 200 - obj.power <= 40)) {
        newCar.engine.power = 200;
        newCar.engine.volume = 3500;
    }

    if (Math.floor(obj.wheelsize) % 2 === 0) {
        obj.wheelsize = Math.floor(obj.wheelsize) - 1;
        for(let i = 1; i <= 4; i++) {
            newCar.wheels.push(obj.wheelsize);
        }
    } else {
        for(let i = 1; i <= 4; i++) {
            newCar.wheels.push(obj.wheelsize);
        }
    }
return newCar;
}

console.log(carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}));


// let library = {
//     engine: {
//         'Small engine': { power: 90, volume: 1800 },
//         'Normal engine': { power: 120, volume: 2400 },
//         'Monster engine': { power: 200, volume: 3500 }
//     },
//     carriage: { 
//         'Hatchback': { type: 'hatchback', color: '' }, 
//         'Coupe': { type: 'coupe', color: '' }
//     },
//     wheels: number
// }