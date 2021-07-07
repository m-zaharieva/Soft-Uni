let isSymmetric = require('../check-for-symmetry');
let { assert } = require('chai');

describe('Test for Symmetry functionallity', () => {
    it('Should pass when an symetric array of numbers is provided', () => {
        let input = [1, 2, 3, 4, 3, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });
    it('Should pass when an symetric array of strings is provided', ()=> {
        let input = ['test', 'symetric', 'array', 'symetric', 'test'];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });
    it('Should fail when an non symetric array is provided', ()=> {
        let input = ['test', 'symetric', 'array', 'nonSymetric', 'symetric', 'test'];
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });
    it('Should fail when an symetric array is provided but of different types', ()=> {
        let input = [1, 2, 3, '2', 1];
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        assert.equal(actualResult, expectedResult);
    });
    it('Should fail when not an array is provided', ()=> {
        assert.equal(isSymmetric(''), false);
        assert.equal(isSymmetric({}), false);
        assert.equal(isSymmetric(undefined), false);
        assert.equal(isSymmetric(true), false);
        assert.equal(isSymmetric(10), false);
        assert.equal(isSymmetric(NaN), false);
    });
})