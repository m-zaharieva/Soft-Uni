class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length >= 0) {
            return this.innerLength -= length;
        } else {
            return this.innerLength = 0; 
        }
    }

    toString() {
        let stringLength = (this.innerString).length;
        if (stringLength <= this.innerLength) {
            return this.innerString;
        } else if (stringLength > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`
        } else if (this.innerLength == 0) {
            return '...'
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test