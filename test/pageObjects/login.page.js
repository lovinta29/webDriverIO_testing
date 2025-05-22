class loginPage{
    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('h3[data-test="error"]');
    }
    
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
    
    async getErrorMessage() {
        return await this.errorMessage.getText();
    }

    async clearSession() {
        await browser.deleteCookies();
        await browser.reloadSession();
    }
}

export default new loginPage();