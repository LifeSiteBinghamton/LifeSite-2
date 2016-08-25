declare var browser: any, element: any, by: any;

export class Register {
    public $email = element(by.css('input[name="email"]'));
    public $loginLink = element(by.css('p.register__haveAccount a[href="#/"]'));
    public $signUp = element(by.css('button.ui.positive'));
    public $signUpSuccess = element(by.css('.ui.success.message'));
    public $token = element(by.css('input[name="token"]'));
    public $id = element(by.css('input[name="id"]'));
}

