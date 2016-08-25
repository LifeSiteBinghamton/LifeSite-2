import { AbstractControl, FormControl } from '@angular/forms';

import { IValidator } from '../../validation/index';

export interface ILsField {
    value?: string;
    key?: string;
    label?: string;
    order?: number;
    fieldType?: string;
    validators?: IValidator[];

    initializeValidators(control: AbstractControl): void;
    getInvalidMessage(errors: {[key: string]: any}): string;
    onInit(control: FormControl): any;
}

