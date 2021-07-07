const { assert } = require('chai');
let sum = require('../sum-of-numbers');

describe('Test Sum Of Numbers Functionallity', () => {
    it('Should pass when an array of numbers is provided', () => {
        let input = [1, 2, 3, 4];
        let expectedResult = 10;
        let actualResult = sum(input);
        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when actual result differce from the expected', () => {
        let input = [1, 2, 3, 4, 6];
        let expectedResult = 10;
        let actualResult = sum(input);
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should fail when the array is not of numbers', () => {
        let input = [1, 2, '3a', '4', 6];
        let expectedResult = 16;
        let actualResult = sum(input);
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should pass when an array of strings of numbers is provided', () => {
        let input = [1, 2, '3', '4', 6];
        let expectedResult = 16;
        let actualResult = sum(input);
        assert.equal(actualResult, expectedResult);
    });
})