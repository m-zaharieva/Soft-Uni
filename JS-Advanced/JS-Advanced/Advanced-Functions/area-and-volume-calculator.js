function solve(area, vol, input) {
    let coordinatesArr = JSON.parse(input);
    let result = [];

    for (const obj of coordinatesArr) {
        let tempObjCalc = {
            area: area.call(obj),
            volume: vol.call(obj),
        }

        result.push(tempObjCalc)
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

solve(area, vol, '[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]')