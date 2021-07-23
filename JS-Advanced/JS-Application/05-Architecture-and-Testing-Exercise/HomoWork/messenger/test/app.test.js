const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

let browser;
let page;
let clientUrl = 'http://127.0.0.1:5501/';

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}

let testMessages = {
    1: {
        author: 'Marta',
        content: 'My message'
    },
    2: {
        author: 'Pesho',
        content: 'Other message'
    }
}

let createTestMessages = {
    3: {
        author: 'Gosho',
        content: 'This is Gosho\'s message'
    },
    4: {
        author: 'Mariya',
        content: 'Some other message'
    }
}

describe('test', function () {
    // before(async () => { browser = await chromium.launch({headless: false, slowMo: 4000}); });
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); })
    afterEach(async () => { await page.close(); });

    describe('load messages', () => {
        it('Should call a server', async() => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages))
            });
            await page.goto(clientUrl);
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
            let result = await response.json();
            assert.deepEqual(result, testMessages);
        });
        it('Should have loaded messages in the textarea', async() => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages))
            });
            await page.goto(clientUrl);
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
           let textAreaMessages = await page.$eval('#messages', (textAra) => textAra.value);
           let text = Object.values(testMessages).map(x => `${x.author}: ${x.content}`).join('\n');
            assert.deepEqual(textAreaMessages, text);
        });
    });

    describe('create message', () => {
        it('Should call a server when message is created', async() => {
            let requestData = undefined;
            let expected = {
                author: 'Ivan',
                content: 'Ivan\'s message',
            }
            await page.route('**/jsonstore/messenger', (route, request) => {
                if (request.method().toLowerCase() === 'post') {
                    requestData = request.postData();
                    route.fulfill(fakeResponse(createTestMessages))
                }
            });
            await page.goto(clientUrl);
            await page.fill('#author', expected.author);
            await page.fill('#content', expected.content);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let result = JSON.parse(requestData);
            assert.deepEqual(result, expected);
        });

        it('Should clear inputs', async() => {
            let requestData = undefined;
            let expected = {
                author: 'Ivan',
                content: 'Ivan\'s message',
            }
            await page.route('**/jsonstore/messenger', (route, request) => {
                if (request.method().toLowerCase() === 'post') {
                    requestData = request.postData();
                    route.fulfill(fakeResponse(createTestMessages))
                }
            });
            await page.goto(clientUrl);
            await page.fill('#author', expected.author);
            await page.fill('#content', expected.content);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let authorValue  = await page.$eval('#author', a => a.value);
            let contentValue  = await page.$eval('#content', a => a.value);

            assert.deepEqual(authorValue, '');
            assert.deepEqual(contentValue, '');
        });
    });
})