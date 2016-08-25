declare var browser: any, element: any, by: any;

export class Login {
    public $email = element(by.css('input[name="email"]'));
    public $password = element(by.css('input[name="password"]'));
    public $loginButton = element(by.css('button.ui.positive'));
    public $registerButton = element(by.css('a.ui.inverted'));
}
