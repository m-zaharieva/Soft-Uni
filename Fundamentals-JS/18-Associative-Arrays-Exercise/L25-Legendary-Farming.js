function legendaryFarming(input) {
    let materials = new Map();
    materials.set('motes', 0);
    materials.set('shards', 0);
    materials.set('fragments', 0);

    let junk = new Map();

    let inputArr = input.split(' ');

    let legendarys = {
        shards: 'Shadowmourne',
        motes: 'Dragonwrath',
        fragments: 'Valanyr'
    };

    for (let index = 0; index < inputArr.length; index += 2) {
        let quantity = Number(inputArr[index]);
        let material = inputArr[index + 1].toLowerCase();

        if (!materials.has(material)) {
            if (!junk.has(material)) {
                junk.set(material, quantity);
            } else {
                junk.set(material, junk.get(material) + quantity);
            }
        } else {
            materials.set(material, materials.get(material) + quantity);
        }

        if (materials.get(material) >= 250) {
            console.log(`${legendarys[material]} obtained!`);
            materials.set(material, materials.get(material) - 250);
            break;
        }
    }

    let sortedMaterials = Array.from(materials.keys()).sort((a, b) => {
        if (materials.get(a) - materials.get(b) > 0) {
            return -1;
        } else if (materials.get(a) - materials.get(b) < 0) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });

    let sortedJunk = Array.from(junk.keys()).sort((a,b) => a.localeCompare(b));

    sortedMaterials.forEach(element => {
        console.log(`${element}: ${materials.get(element)}`);
    })
    sortedJunk.forEach(element => {
        console.log(`${element}: ${junk.get(element)}`);
    })
}

// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');