import loginPage from '../pageObjects/login.page.js';

describe('Login Test', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('Test login dengan username dan password yang benar', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html') && 
        await expect(browser).toHaveTitle('Products');
    });

    it('Test login dengan username benar dan password yang salah', async () => {
        await loginPage.login('standard_user', 'wrong_password');
        await expect(loginPage.errorMessage).toBeDisplayed();
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    afterEach(async () => {
        await loginPage.clearSession();
    });
});