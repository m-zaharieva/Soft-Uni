function animalType (arg) {
    let animal = arg;

    switch (animal) {
        case "dog": console.log("mammal"); break;
        case "crocodile": 
        case "tortoise":
        case "snake": console.log("reptile"); break; 
        default: console.log("unknown");
    }
}

animalType();