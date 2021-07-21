const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

let browser;
let page;
describe('Tests', function () {
    this.timeout(10000);
    before(async () => {
        browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it('Should load accordion elements when an AJAX request is made.', async () => {
        await page.goto('http://localhost:5500');
        let button = await page.textContent('button');
        assert.equal(button.trim(), 'More');
    });

    it('Should open accordion panel when the More button is clicked and be renamed to Less', async () => {
        await page.goto('http://localhost:5500');
        await page.click('text=More');
        let hiddenTexgt = await page.isVisible('div.extra');
        let button = await page.textContent('button');
        assert.isTrue(hiddenTexgt);
        assert.equal(button, 'Less');
    });
    
    it('Should close accordion panel when the Less button is clicked and to be renamed to More', async () => {
        await page.goto('http://localhost:5500');
        await page.click('text=More');
        await page.click('text=Less');
        let accordionText = await page.isVisible('div.extra');
        let button = await page.textContent('button');
        assert.isNotTrue(accordionText);
        assert.equal(button, 'More');
    });
})