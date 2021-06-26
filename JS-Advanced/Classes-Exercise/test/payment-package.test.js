let PaymentPackage = require('../payment-package');
let { assert } = require('chai');

describe("payment package", function() {
    describe("Constructior", function() {
        it("Should throw an error when non-string value for a name is provided", function() {
            assert.throws((() => new PaymentPackage('', 12)));
            assert.throws((() => new PaymentPackage(134, 12)));
            assert.throws((() => new PaymentPackage(null, 12)));
        });
        it("Should throw an error when not a number or negative value for 'value' is provided", function() {
            assert.throws((() => new PaymentPackage('some string', '12')));
            assert.throws((() => new PaymentPackage('some string', -100)));
            assert.throws((() => new PaymentPackage('some string', null)));
        });
        it("Should throw an error if not a number or negative value is provided", function() {
            assert.throws((() => new PaymentPackage('some string', '12')));
            assert.throws((() => new PaymentPackage('some string', -100)));
            assert.throws((() => new PaymentPackage('some string', null)));
        });
    });    
});