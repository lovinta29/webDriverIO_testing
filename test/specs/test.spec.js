describe ('Open WebdriverIO page', () => {
    it ('should open browser and access page', async() => {
        await browser.url('https://webdriver.io/');
        await browser.pause(2000);
        expect (browser).toHaveTitleContaining('WebdriverIO');
    })
})