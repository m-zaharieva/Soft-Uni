let PaymentPackage = require('../payment-package');
let { assert } = require('chai');

describe("payment package", function() {
    describe("Constructior", function() {
        it("Should throw an error when non-string value for a name is provided", function() {
            assert.throws(() => new PaymentPackage('', 12));
            assert.throws(() => new PaymentPackage(134, 12));
            assert.throws(() => new PaymentPackage(null, 12));
        });
        it("Should throw an error when not a number or negative value for 'value' is provided", function() {
            assert.throws(() => new PaymentPackage('some string', '12'));
            assert.throws(() => new PaymentPackage('some string', -100));
            assert.throws(() => new PaymentPackage('some string', null));
        });
        it("Should throw an error if not a number or negative value for 'VAT' is provided", function() {
            let newPackage = new PaymentPackage('string', 30);
            assert.throws(() => newPackage.VAT = -20);
            assert.throws(() => newPackage.VAT = 'other string');
            assert.throws(() => newPackage.VAT = null);
        });
        it("Should throw an error if not a boolian value for 'active' is provided", function() {
            let newPackage = new PaymentPackage('string', 30);
            assert.throws(() => newPackage.active = -20);
            assert.throws(() => newPackage.VAT = 'not a boolian');
            assert.throws(() => newPackage.VAT = null);
        });
        it("Should pass when a Zero value is given to the 'Value", function() {
            let newPackage = new PaymentPackage('string', 0);
            let actualResult = newPackage.toString();
            let expectedResult = 'Package: string\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0';
            assert.equal(actualResult, expectedResult); 
        });
        it("Should pass when a Zero value is given to the 'VAT", function() {
            let newPackage = new PaymentPackage('string', 20);
            newPackage.VAT = 0;
            let actualResult = newPackage.toString();
            let expectedResult = 'Package: string\n- Value (excl. VAT): 20\n- Value (VAT 0%): 20';
            assert.equal(actualResult, expectedResult); 
        });
    });
    describe("Method toString", function() {
        it("Should throw an error when non-string value for a name is provided", function() {
            let newPackage = new PaymentPackage('packageName', 400);
            let actualResult = newPackage.toString();
            let expectedResult = 'Package: packageName\n- Value (excl. VAT): 400\n- Value (VAT 20%): 480';
            assert.equal(actualResult, expectedResult);
        });
        it("Should throw an error when non-string value for a name is provided", function() {
            let newPackage = new PaymentPackage('packageName', 400);
            newPackage.active = false;
            let actualResult = newPackage.toString();
            let expectedResult = 'Package: packageName (inactive)\n- Value (excl. VAT): 400\n- Value (VAT 20%): 480';
            assert.equal(actualResult, expectedResult);
        });
    });
    describe("Other cases", function() {
        it("Should throw an error when non-string value for a name is provided", function() {
            let newPackage = new PaymentPackage('packageName', 400);
            newPackage.active = false;
            let actualResult = newPackage.toString();
            let expectedResult = 'Package: packageName (inactive)\n- Value (excl. VAT): 400\n- Value (VAT 20%): 480';
            assert.equal(actualResult, expectedResult);
        });
    });    
});