function argumentInfo(...params) {
    let result = [];
    let counter = {}
        for (const element of params) {
            let elementTypeOf = typeof (element);
            counter[elementTypeOf] ? counter[elementTypeOf] += 1 : counter[elementTypeOf] = 1;
            result.push(`${elementTypeOf}: ${element}`);
        }


    Object.keys(counter)
    .sort((a, b) => counter[b] - counter[a])
    .forEach(x => result.push(`${x} = ${counter[x]}`));

    console.log(result.join('\n'));

}


argumentInfo('cat', 42, function () { console.log('Hello world!'); });