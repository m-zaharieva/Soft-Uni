let createCalculator = require('../add-subtract');
let { assert } = require('chai');

describe('Test functionality of createCalulator', () => {
    describe('add', () => {
        it('Should pass when a number is provided', () => {
            let calculator = createCalculator();
            calculator.add(2);
            let actualResult = calculator.get();
            let expectedResult = 2;
            assert.equal(actualResult, expectedResult);
        });
        it('Should pass when a parced number is provided', () => {
            let calculator = createCalculator();
            calculator.add('2');
            let actualResult = calculator.get();
            let expectedResult = 2;
            assert.equal(actualResult, expectedResult);
        });
        it('Should pass when the function add is called multiple times', () => {
            let calculator = createCalculator();
            calculator.add(2);
            calculator.add(5);
            calculator.add(7);
            let actualResult = calculator.get();
            let expectedResult = 14;
            assert.equal(actualResult, expectedResult);
        });
        it('Should pass when not a number or parced number is provided', () => {
            let calculator = createCalculator();
            calculator.add('a');
            let actualResult = calculator.get();
            let expectedResult = NaN;
            assert.equal(actualResult, expectedResult);
        });
    });
    describe('subtract', () => {
        it('Should pass when a number is provided', () => {
            let calculator = createCalculator();
            calculator.subtract(2);
            let actualResult = calculator.get();
            let expectedResult = -2;
            assert.equal(actualResult, expectedResult);
        });
        it('Should pass when a parced number is provided', () => {
            let calculator = createCalculator();
            calculator.subtract('2');
            let actualResult = calculator.get();
            let expectedResult = -2;
            assert.equal(actualResult, expectedResult);
        });
        it('Should pass when a the function subtract is called multiple times', () => {
            let calculator = createCalculator();
            calculator.subtract(2);
            calculator.subtract(5);
            calculator.subtract(7);
            let actualResult = calculator.get();
            let expectedResult = -14;
            assert.equal(actualResult, expectedResult);
        });
    });
    describe('add and subtract', () => {
        it('Should pass when add and subtract are called multiple times', () => {
            let calculator = createCalculator();
            calculator.subtract(2);
            calculator.add(8);
            calculator.add(2);
            calculator.subtract(1);
            calculator.subtract(4);
            calculator.add(5);
            let actualResult = calculator.get();
            let expectedResult = 8;
            assert.equal(actualResult, expectedResult);
        });   
        it('Should pass when add and subtract are called multiple times with parsed numbers', () => {
            let calculator = createCalculator();
            calculator.subtract('2');
            calculator.add(8);
            calculator.add('2');
            calculator.subtract(1);
            calculator.subtract(4);
            calculator.add('5');
            let actualResult = calculator.get();
            let expectedResult = 8;
            assert.equal(actualResult, expectedResult);
        });  
    });
    describe('data type', () => {
        it('Should return object', () => {
            let calculator = createCalculator();
            assert.equal(typeof calculator, 'object');
        });   
    });
    describe('get', () => {
        it('Shoyuld return object', () => {
            let calculator = createCalculator();
            assert.equal(typeof calculator, 'object');
        });   
    });
});