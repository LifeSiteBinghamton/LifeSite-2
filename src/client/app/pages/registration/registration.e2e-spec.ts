describe('Registration', function () {
    let register;

    beforeAll(function () {
        browser.get('#/register');
        register = new Register();
    });

    it('should route to /register', function () {
        browser.getCurrentUrl().then(function(val) {
            expect(val).toBe(`${browser.baseUrl}#/register`);
        });
    });

    it('should have a language switcher', function () {
        expect(element(by.css('lang-switcher')).isPresent()).toEqual(true);
    });

    it('should have a button to go back to login', function () {
        expect(register.$loginLink.isPresent()).toEqual(true);
    });

    it('should allow a user to register', function () {
        expect(register.$token.getAttribute('value')).toEqual('');
        expect(register.$id.getAttribute('value')).toEqual('');

        register.$email.sendKeys(browser.params.login.email);
        register.$signUp.click().then(function() {
            expect(register.$signUpSuccess.getAttribute('ng-reflect-hidden')).toEqual('false');
            expect(register.$token.getAttribute('value')).not.toEqual('');
            expect(register.$id.getAttribute('value')).not.toEqual('');

            register.$token.getAttribute('value').then(function (token) {
                browser.params.token = token;
            });
            register.$id.getAttribute('value').then(function (id) {
                browser.params.id = id;
            });
        });
    });
});

class Register {
    public $email = element(by.css('input[name="email"]'));
    public $loginLink = element(by.css('p.register__haveAccount a[href="#/"]'));
    public $signUp = element(by.css('button.ui.positive'));
    public $signUpSuccess = element(by.css('.ui.success.message'));
    public $token = element(by.css('input[name="token"]'));
    public $id = element(by.css('input[name="id"]'));
}
