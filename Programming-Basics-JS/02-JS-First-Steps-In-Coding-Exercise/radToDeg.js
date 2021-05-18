function converter(input){
    let rad = Number(input);
    let deg = rad * 180/Math.PI;
    console.log(deg.toFixed(0));
}

converter("3.1416");