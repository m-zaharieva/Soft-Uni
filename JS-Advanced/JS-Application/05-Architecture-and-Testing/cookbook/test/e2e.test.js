const { chromium } = require('playwright-chromium');
const { assert } = require('chai');


const mockData = require('./mock-data.json');
const host = 'http://localhost:3000';
const endpoints = {
    recipes: '/data/recipes?select=_id%2Cname%2Cimg',
    count: '/data/recipes?count',
    recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc',
    recipe_by_id: '/data/recipes/3987279d-0ad4-4afb-8ca9-5b256ae3b298',
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    create: '/data/recipes'
};


function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}


let browser;
let context;
let page;

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    it('The catalog page should load and render the content of the API, Displays the recipe details', async () => {
        await page.goto('http://localhost:3000');
        let button = await page.textContent('a#catalogLink');
        assert.equal(button, 'Catalog');
        let previewDiv = await page.isVisible('article.preview');
        assert.isTrue(previewDiv);
        await page.click('article.preview');
        let details = await page.isVisible('section#details');
        assert.isTrue(details);
    });

    it('Should successfully register new user', async () => {
        const endpoint = '**' + endpoints.register;
        const email = 'marta@abv.bg';
        const password = '123456';

        parent.route(endpoint, route => route.fullfill(json({ _id: '0002', email, accessToken: 'AAAA' })));

        await page.goto(host);
        await page.click('text-Register');
        await page.waitForSelector('form');
        await page.fill('[name="email"]', email);
        await page.fill('[name="password"]', password);
        await page.fill('[name="rePass"]', password);

        const [response] = await Promise.all([
            page.waitForResponse(endpoint),
            page.click('[type="submit"]')
        ]);

        const postData = JSON.parse(response.request().postData());
        assert.equal(postData.email, email);
        assert.equal(postData.password, password);
    });

    
});
