describe('Login', function () {
    let login;

    beforeAll(function () {
        browser.get('#/');
        login = new Login();
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('LifeSite');
    });

    it('should route to /login', function () {
        browser.getCurrentUrl().then(function (url) {
            expect(url).toBe(`${browser.baseUrl}#/`);
        });
    });

    it('should have a form', function () {
        expect(element(by.css('form')).isPresent()).toEqual(true);
    });

    it('should have a language switcher', function () {
        expect(element(by.css('lang-switcher')).isPresent()).toEqual(true);
    });

    it('should go to the registration page', function () {
        login.$registerButton.click().then(function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toBe(`${browser.baseUrl}#/register`);
            });
        });
    });

    it('should show an error message if the user inputs incorrect credentials', function () {
        // Go back to login page using the registration button
        element(by.css('p.register__haveAccount a[href="#/"]')).click().then(function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toBe(`${browser.baseUrl}#/`);
            });

            login.$email.sendKeys('test@gmail.com');
            login.$password.sendKeys('invalidPassword');
            login.$loginButton.click().then(function () {
                expect(element(by.css('.ui.warning')).isPresent()).toEqual(true);
            });
        });
    });

    it('should successfully log a user in if they input correct credentials', function () {
        login.$email.clear();
        login.$password.clear();

        login.$email.sendKeys(browser.params.login.email);
        login.$password.sendKeys(browser.params.login.password);
        login.$loginButton.click().then(function () {
            browser.getCurrentUrl().then(function (url) {
                expect(url).toEqual(`${browser.baseUrl}#/onboarding`);
            });
        });
    });

});

class Login {
    public $email = element(by.css('input[name="email"]'));
    public $password = element(by.css('input[name="password"]'));
    public $loginButton = element(by.css('button.ui.positive'));
    public $registerButton = element(by.css('a.ui.inverted'));
}
