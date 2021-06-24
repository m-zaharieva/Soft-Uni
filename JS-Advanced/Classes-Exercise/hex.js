class Hex {
    constructor(value) {
        this.valueOf = () => {
            return value;
        }
        this.toString = () => {
            return `OX${value.toString(16).toUpperCase()}`;
        }

        this.plus(number) = () => {
            
        }
    }
}



let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
// console.log(Hex.parse('AAA'));