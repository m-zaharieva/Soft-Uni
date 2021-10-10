const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    kind: String,
});

petSchema.methods.makeSound = function () {
    return this.kind == 'cat' ? 'Meow' : 'Wruff';
}

petSchema.virtual('pasport')
    .get(function () {
        return this.kind + ' ' + this.name;
    });

petSchema.path('name')
    .validate(function () {
        return this.name.length >= 2 && this.name.length <= 10;
    }, 'Name must be a string with length between 2 and 10 chaacters');



const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;