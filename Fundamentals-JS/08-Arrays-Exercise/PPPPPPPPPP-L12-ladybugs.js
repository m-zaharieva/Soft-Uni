function ladybugs(arr) {
    let fieldSize = arr[0];
    let inicialIndexes = arr[1].split(' ');
    inicialIndexes = inicialIndexes.map(Number);

    let field = []      // [0, 0, 0]
    for (let row = 0; row < fieldSize; row++) {
        field[row] = 0; 
    }

    for (let i = 0; i < inicialIndexes.length; i++) {
        field[inicialIndexes[i]] = 1;   // [1, 1, 0]
    }

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let startCell = Number(command[0]);
        let direction = command[1];
        let step = Number(command[2]);

        if (direction === 'left') {
            if (startCell - step < 0) {
                field[startCell] = 0;
            } 
            while (startCell - step >= 0) {
                if (field[startCell] === 0) {
                    break;
                }
                if (field[startCell] === 1) {
                    if (field[startCell - step] === 0) {
                        field[startCell] = 0;
                        field[startCell - step] = 1;
                        break;
                    } else if (field[startCell - step] === 1) {
                        step += step;
                    }
                } 
            }
            field[startCell] = 0;
            
        } else if (direction === 'right') {
            if (startCell + step >= field.length) {
                field[startCell] = 0;
            } 
            while (startCell + step < field.length) {
                if (field[startCell] === 0) {
                    break;
                }
                if (field[startCell] === 1) {
                    if (field[startCell + step] === 0) {
                        field[startCell] = 0;
                        field[startCell + step] = 1;
                        break;
                    } else if (field[startCell + step] === 1) {
                        step += step;
                    }
                } 
            }
            field[startCell] = 0;
        }
    }

   console.log(field.join(' '));

}

ladybugs([5, '3', '3 left 2', '1 left -2']);
//ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
//ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
