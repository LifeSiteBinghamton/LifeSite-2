import { FormControl, ValidatorFn } from '@angular/forms';

import { ValidatorType, IValidatorOptions } from './validation.interface';
import { BaseValidator } from './base-validator';

export class RequiredValidator extends BaseValidator {

    constructor(options: IValidatorOptions = {message: 'This field is required.'}) {
        super(ValidatorType.Required, 'required', options);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey]: true};
        };
    }

    isValid(value: any): boolean {
        return value !== '' && value !== null && !!value;
    }
}

