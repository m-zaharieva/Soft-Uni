function cats(myArray) {

    class Cat {
        constructor(name, age) {
            this.name = name; 
            this.age = age;
            this.makeSound = function() {
                console.log(`${name}, age ${age} says Meow`);
            }
        }
    }

    let cats = [];

    for (let i = 0; i < myArray.length; i++) {
        let catArr = myArray[i].split(' ');
        let [name, age] = catArr;
        let cat = new Cat(name, age);
        cats.push(cat);
    }
    
    for (let element of cats) {
        element.makeSound();
    }
 

}

cats(['Mellow 2', 'Tom 5']);