import { FormControl, ValidatorFn } from '@angular/forms';

import { ValidatorType, IValidatorOptions } from './validation.interface';
import { BaseValidator } from './base-validator';

export class EmailValidator extends BaseValidator {

    constructor(options: IValidatorOptions = {message: 'Invalid email.'}) {
        super(ValidatorType.Email, 'email', options);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey]: true};
        };
    }

    isValid(value: any): boolean {
        // RFC 2822 compliant regex
        /* tslint:disable */
        return value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        /* tslint:enable */
    }
}
