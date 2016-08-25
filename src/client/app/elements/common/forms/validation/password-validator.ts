import { FormControl, ValidatorFn } from '@angular/forms';

import { ValidatorType, IValidatorOptions } from './validation.interface';
import { BaseValidator } from './base-validator';

export class PasswordValidator extends BaseValidator {

    constructor(options: IValidatorOptions = {message: 'Password does not meet the requirements.'}) {
        super(ValidatorType.Password, 'password', options);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey]: true};
        };
    }

    isValid(value: any): boolean {
        return value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);
    }
}
