let mathEnforcer = require('../math-enforcer');
let { assert } = require('chai');

describe('Math Ebforcer', () => {
    describe(('Add Five'), () => {
        it('Should return undefined when not a number is provided', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
            assert.equal(mathEnforcer.addFive(null), undefined);
            assert.equal(mathEnforcer.addFive(undefined), undefined);
            assert.equal(mathEnforcer.addFive(true), undefined);
        });

        it('Should return number result when an integer number is provided', () => {
            assert.equal(mathEnforcer.addFive(8), 13);
            assert.equal(mathEnforcer.addFive(12), 17);
        });

        it('Should return number result when an negative number is provided', () => {
            assert.equal(mathEnforcer.addFive(-2), 3);
            assert.equal(mathEnforcer.addFive(-8), -3);
        });

        it('Should return float number result when an floatuing point number is provided', () => {
            assert.equal(mathEnforcer.addFive(1.1), 6.1);
            assert.closeTo(mathEnforcer.addFive(1.1 + 2.2), 8.3, 0.01);
            assert.closeTo(mathEnforcer.addFive(-3.3), 1.7, 0.01);
        });
    });

    describe(('Subtract Ten'), () => {
        it('Should return undefined when not a number is provided', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
            assert.equal(mathEnforcer.subtractTen(null), undefined);
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
            assert.equal(mathEnforcer.subtractTen(true), undefined);
        });

        it('Should return number result when an integer number is provided', () => {
            assert.equal(mathEnforcer.subtractTen(8), -2);
            assert.equal(mathEnforcer.subtractTen(12), 2);
        });

        it('Should return number result when an negative number is provided', () => {
            assert.equal(mathEnforcer.subtractTen(-2), -12);
            assert.equal(mathEnforcer.subtractTen(-8), -18);
        });

        it('Should return float number result when an floatuing point number is provided', () => {
            assert.closeTo(mathEnforcer.subtractTen(1.1), -8.9, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(-3.3), -13.3, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(1.1 + 2.2), -6.7, 0.01);
        });
    });

    describe(('Sum two Numbers'), () => {
        it('Should return undefined when first number is not a number', () => {
            assert.equal(mathEnforcer.sum('5', 5), undefined);
            assert.equal(mathEnforcer.sum(null, 5), undefined);
            assert.equal(mathEnforcer.sum(undefined, 5), undefined);
            assert.equal(mathEnforcer.sum(true, 5), undefined);
        });

        it('Should return undefined when second number is not a number', () => {
            assert.equal(mathEnforcer.sum(5, '5'), undefined);
            assert.equal(mathEnforcer.sum(5, null), undefined);
            assert.equal(mathEnforcer.sum(5, undefined), undefined);
            assert.equal(mathEnforcer.sum(5, true), undefined);
        });

        it('Should return sum result when noth parametersare numbers', () => {
            assert.equal(mathEnforcer.sum(8, 12), 20);
            assert.equal(mathEnforcer.sum(3, 45), 48);
        });

        it('Should return number result when an negative numbers are provided', () => {
            assert.equal(mathEnforcer.sum(-2, -8), -10);
            assert.equal(mathEnforcer.sum(-8, 5), -3);
            assert.equal(mathEnforcer.sum(8, -5), 3);
        });

        it('Should return float number result when an floatuing point numbers are provided', () => {
            assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.01);
            assert.closeTo(mathEnforcer.sum(-1.1, 2.2), 1.1, 0.01);
            assert.closeTo(mathEnforcer.sum(4.4, 5.2), 9.6, 0.01);
        });
    });
});