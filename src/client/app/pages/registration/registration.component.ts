import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { MultiComponent, LangSwitcherComponent } from 'frameworks';
import { RegistrationHandler } from './registration.handler';

/**
 * @component
 * @name Registration
 * @description
 * Step 1 of 4 of the registration process.  Component which shows the user a form where their email address is entered.
 * On success the user is redirected to a page where they are informed that an email has been sent with subsequent
 * instructions.
 */
@MultiComponent({
    moduleId: module.id,
    selector: 'registration',
    templateUrl: 'registration.html',
    styleUrls: ['registration.css'],
    directives: [LangSwitcherComponent],
    providers: [RegistrationHandler]
})
export class Register {
    private registerForm: FormGroup;

    constructor(fb: FormBuilder, private handler: RegistrationHandler) {
        this.registerForm = fb.group({
            email: ['', Validators.required],
            token: [''],
            id: ['']
        });

        this.handler.init();

        this.handler.isError$.subscribe(() => {
            // todo - error
        });

        this.handler.token$.subscribe(token => {
            (<FormControl>this.registerForm.controls['token']).updateValue(token);
        });
        this.handler.id$.subscribe(id => {
            (<FormControl>this.registerForm.controls['id']).updateValue(id);
        });
    }

    onSubmit() {
        this.handler.register(this.registerForm.value['email']);
    }
}
