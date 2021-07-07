class List {

    constructor() {
        this.list = [];
        this.size = 0;

    }

    add(num) {
        this.list.push(num);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index <= this.list.length - 1) {
            this.list.splice(index, 1);
        } else {
            throw new Error('Index is out of range');
        }
        this.size--;
    }

    get(index) {
        if (index >= 0 && index <= this.list.length - 1) {
            return this.list[index];
        } else {
            throw new Error('Index is out of range');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);