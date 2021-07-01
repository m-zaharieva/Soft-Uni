let testNumbers = require('../testNumbers');
let { assert } = require('chai');

describe('Test Numbers', () => {
    describe('Sum Numbers', () => {
        it('Should return undefined when not a number is provided', () => {
            assert.equal(testNumbers.sumNumbers('1', '2'), undefined);
            assert.equal(testNumbers.sumNumbers(1, '2'), undefined);
            assert.equal(testNumbers.sumNumbers('a', 2), undefined);
            assert.equal(testNumbers.sumNumbers(null, null), undefined);
            assert.equal(testNumbers.sumNumbers(true, false), undefined);
        });
        it('should return result when two numbers are provided', () => {
            assert.equal(testNumbers.sumNumbers(2, 6), 8);
            assert.equal(testNumbers.sumNumbers(-2, -6), -8);
            assert.equal(testNumbers.sumNumbers(-2, 23), 21);
            assert.equal(testNumbers.sumNumbers(1.1, 2.2), 3.3);
        })
        it('should return only two digyts after the decilam point when two float numbers are provided', () => {
            assert.equal(testNumbers.sumNumbers(2.4573, 6.3265), 8.78);
        })
    });

    describe('Number Checker', () => {
        it('Should throw an error when not a number value is provided', () => {
            assert.throws(() => testNumbers.numberChecker('a'));
            // assert.throws(() => testNumbers.numberChecker(true));
            assert.throws(() => testNumbers.numberChecker(undefined));
            // assert.throws(() => testNumbers.numberChecker(null));
        });
        it('Should pass and return even, when an even number is provided', () => {
            assert.equal(testNumbers.numberChecker(8), 'The number is even!');
            assert.equal(testNumbers.numberChecker(-12), 'The number is even!');
            // case when a floating number is provided;
        });
        it('Should pass and return odd, when an odd number is provided', () => {
            assert.equal(testNumbers.numberChecker(7), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(-13), 'The number is odd!');
        });
    });

    describe('Avarage Sum Array', () => {
        it('Should return the sum of elements when an valid array is provided', () => {
            assert.equal(testNumbers.averageSumArray([1, 2, 3, 4, 5]), 3);
            assert.closeTo(testNumbers.averageSumArray([1, 5, -3, 2.8, 6]), 2.36, 0.01);
        });
    });
});