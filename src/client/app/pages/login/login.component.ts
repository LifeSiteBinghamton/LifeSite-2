import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { LsLoader } from 'elements';
import { MultiComponent, LangSwitcherComponent } from 'frameworks';
import { LoginHandler } from './login.handler';

/**
 * @component Login
 * @name Login
 * @description
 * Component which represents the login form.  The login form prompts the user for their email address and
 * password, and submits this to the server via the {@link LoginService} to validate the user.
 */
@MultiComponent({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['login.css'],
    directives: [LangSwitcherComponent, LsLoader],
    providers: [LoginHandler]
})
export class Login {
    private loginForm: FormGroup;
    private error: string;

    constructor(fb: FormBuilder, private router: Router, private handler: LoginHandler) {
        this.loginForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.handler.init();

        this.handler.isLoggedIn$.subscribe(() => {
            this.router.navigateByUrl('/onboarding');
        });

        this.handler.isError$.subscribe(data => this.error = data);
    }

    onSubmit() {
        this.handler.login(this.loginForm.value);
    }
}
