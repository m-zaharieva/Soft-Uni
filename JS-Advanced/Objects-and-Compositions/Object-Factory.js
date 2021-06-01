const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
    },
];

function factory(library, orders) {
    let myArray = [];
    orders.forEach(elementObject => {
        let currentObject = {};
        currentObject.name = elementObject.template.name;
        currentObject[parts].forEach(comand => {
            currentObject[comand] = [comand]();
        });
    });
}


const products = factory(library, orders);
console.log(products);