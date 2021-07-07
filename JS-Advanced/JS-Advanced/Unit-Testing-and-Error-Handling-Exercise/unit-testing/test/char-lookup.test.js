let lookupChar = require('../char-lookup');
let { assert } = require('chai');

describe('lookup char', () => {
    it('Should return undefined when first parameter is not a string', () => {
        assert.equal(lookupChar(undefined, 5), undefined);
        assert.equal(lookupChar(true, 5), undefined);
        assert.equal(lookupChar(null, 5), undefined);
        assert.equal(lookupChar([], 5), undefined);
        assert.equal(lookupChar(5, 5), undefined);
    });

    it('Should return undefined when second parameter is not a number', () => {
        assert.equal(lookupChar('test string', '5'), undefined);
        assert.equal(lookupChar('test string', null), undefined);
        assert.equal(lookupChar('string', undefined), undefined);
        assert.equal(lookupChar('unit testing', []), undefined);
        assert.equal(lookupChar('some test', true), undefined);
    });

    it('Should return undefined when bouth parameter are not of the right type', () => {
        assert.equal(lookupChar(true, '5'), undefined);
        assert.equal(lookupChar(5, 'string'), undefined);
        assert.equal(lookupChar(null, true), undefined);
        assert.equal(lookupChar([], undefined), undefined);
        assert.equal(lookupChar(undefined, []), undefined);
    });

    it('Should throw erro when index is negative number out of range', () => {
        assert.equal(lookupChar('some text', -1), 'Incorrect index');
        assert.equal(lookupChar('unit testing', -4), 'Incorrect index');
    });
    it('Should throw erro when index is out of range', () => {
        assert.equal(lookupChar('some text', 9), 'Incorrect index');
        assert.equal(lookupChar('unit testing', 12), 'Incorrect index');
    });
    it('Should throw erro when index is out of range', () => {
        assert.equal(lookupChar('some text', 1.2), undefined);
        assert.equal(lookupChar('unit testing', 3.3), undefined);
    });
    it('Should return the character at the given Index when both parameters are of the right type and range', () => {
        assert.equal(lookupChar('some text', 0), 's');
        assert.equal(lookupChar('unit testing', 11), 'g');
        assert.equal(lookupChar('softuni', 4), 'u');
    });
});