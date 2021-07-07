let isOddOrEven = require('../even-or-odd');
let { assert } = require('chai');

describe('is Odd or Even', () => {
    it('Should return undefined when the parameter is not a string', () => {
        assert.equal(isOddOrEven(1), undefined);
        assert.equal(isOddOrEven(true), undefined);
        assert.equal(isOddOrEven(null), undefined);
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('Should return even when a string with even number of characters is provided', () => {
        assert.equal(isOddOrEven('some'), 'even');
        assert.equal(isOddOrEven('devision'), 'even');
        assert.equal(isOddOrEven('or'), 'even');
    });

    it('Should return odd when a string with odd number of characters is provided', () => {
        assert.equal(isOddOrEven('two'), 'odd');
    });

    it('Should return odd when a string with odd number of characters is provided', () => {
        assert.equal(isOddOrEven('one'), 'odd');
        assert.equal(isOddOrEven('a'), 'odd');
        assert.equal(isOddOrEven('drive'), 'odd');
    });
});