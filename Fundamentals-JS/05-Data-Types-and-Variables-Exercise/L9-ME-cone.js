function cone(radius, height) {
    let volume = ((Math.PI) * Math.pow(radius, 2) * height) / 3;
    let side = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = (Math.PI * radius * side) + Math.PI * Math.pow(radius, 2);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3.3, 7.8);

//s = √(r2 + h2)
//L = πrs = πr√(r2 + h2)
//B = πr2
//A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
