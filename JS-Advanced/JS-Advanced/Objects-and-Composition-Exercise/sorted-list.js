function createSortedList() {
    let result = [];
    return {
        add(el) {
            result.push(el);
            result = result.sort((a,b) => a-b);
            this.size++;
        },
        remove(index) {
            if (index < 0 || index >= result.length) {
                throw new RangeError('Index is out of range');
            }
            result.splice(index, 1);
            this.size--;
        },
        get(index) {
            if (index < 0 || index >= result.length) {
                throw new RangeError('Index is out of range');
            }

            return result[index];
        }, 
        size: 0,
    };
}

// createSortedList();

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(3));
list.remove(1);
console.log(list.get(1));
console.log(list.get(0));