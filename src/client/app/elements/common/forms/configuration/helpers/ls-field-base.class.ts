import { AbstractControl, FormControl } from '@angular/forms';

import { IValidator } from '../../validation/index';
import { ILsField } from './ls-field.interface';
import { IFieldDefaultOptions } from './field-configuration.interface';

export abstract class LsFieldBase implements ILsField {
    value: string;
    key: string;
    label: string;
    order: number;
    validators: IValidator[];
    fieldType: string;

    constructor(options: IFieldDefaultOptions = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order || 0;
        this.validators = options.validators || [];
    }

    initializeValidators(control: AbstractControl): void {
        control.setValidators(this.validators.map((validator: IValidator) => {
            return validator.getValidator();
        }));
    }

    getInvalidMessage(errors: {}): string {
        if (!errors) {
            return '';
        }

        let k = Object.keys(errors);
        let firstValidator = this.validators.find((validator: IValidator) => {
            return validator.getErrorKey() === k[0];
        });
        return firstValidator.getMessage();
    }

    abstract onInit(control: FormControl);
}
