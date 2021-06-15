function solve(input) {
    let objects = {};

    let commands = {
        create(name, inherit, parent) {
           objects[name] = inherit ? Object.create(objects[parent]) : {};
        },

        set(name, key, value) {
            objects[name][key] = value;
        },

        print(name) {
          let result = [];
          for (const key in objects[name]) {
            let temp = `${key}:${objects[name][key]}`
            result.push(temp);
          }
          console.log(result.join(', '));
        }
    }

    for (const text of input) {
        let [cmnd, ...arg] = text.split(' ');
        commands[cmnd](...arg);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'create c3',
    'create c4 inherit c1',
    'set c1 color red',
    'set c1 model ford',
    'set c2 model new',
    'set c4 color blue',
    'print c1',
    'print c2',
    'print c3',
    'print c4']);
