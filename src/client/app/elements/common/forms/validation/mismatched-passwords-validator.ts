import { FormGroup, ValidatorFn } from '@angular/forms';

import { ValidatorType, IValidatorOptions } from './validation.interface';
import { BaseValidator } from './base-validator';

export class MismatchedPasswordValidator extends BaseValidator {

    constructor(options: IValidatorOptions = {message: 'Your passwords must match.'}) {
        super(ValidatorType.Password, 'mismatchedPasswords', options);
    }

    getValidator(): ValidatorFn {
        return (group: FormGroup): {[key: string]: any} => {
            return group.value[0] !== group.value[1] ? {
                [this.errorKey]: true
            } : null;
        };
    }

    isValid(value: any): boolean {
        return true;
    }
}

