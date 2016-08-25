import { FormControl, ValidatorFn } from '@angular/forms';

import { CreditCardUtility } from 'utility';
import { ValidatorType, IValidatorOptions } from './validation.interface';
import { BaseValidator } from './base-validator';

export class CreditCardValidator extends BaseValidator {

    constructor(options: IValidatorOptions = {message: 'Invalid credit card.'}) {
        super(ValidatorType.CreditCard, 'creditcard', options);
    }

    getValidator(): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            return this.isValid(control.value) ? null : {[this.errorKey] : true};
        };
    }

    isValid(value: any): boolean {
        let results = CreditCardUtility.validateCreditCard(value);
        return results.type !== null && results.valid;
    }
}

