class Laptop {
    constructor(info, quality) {
        this.isOn = false;
        this.quality = quality;
        this.info = info;

        this.turnOn = function() {
            this.isOn = true;
            this.quality--;
        }

        this.turnOff = function() {
            this.isOn = false;
            this.quality--;
        }

        this.showInfo = function() {
            return JSON.stringify(info);
        }
    }

    get price(){
        let number = 800 - this.info.age * 2 + this.quality * 0.5;
        return number;
    }

 }

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)