let rgbToHexColor = require('../rgb-to-hex');
let { assert } = require('chai');

describe('Test converting RGB to HEX functionallity', () => {
    it('Should pass when three integers in range are provided', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
    it('Should pass when three integers in range are provided', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');

    });
    it('Should pass when three integers in range are provided', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');

    });
    it('Should fail when integers out of range are provided', () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00');

    });
    it('Should fail when integers out of range and negative numbers are provided', () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF');

    });
    it('Should fail when strings instead of integers are provided', () => {
        assert.equal(rgbToHexColor('', '', ''), undefined);

    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor(-1, 0, 0), undefined);
    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor(256, 0, 0), undefined);
    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor(0, -1, 0), undefined);
    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor(0, 256, 0), undefined);
    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor(0, 0, -1), undefined);
    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor(0, 0, 256), undefined);
    });
    it('Should fail when empty ararys instead of integers are provided', () => {
        assert.equal(rgbToHexColor([], [], []), undefined);
    });
});