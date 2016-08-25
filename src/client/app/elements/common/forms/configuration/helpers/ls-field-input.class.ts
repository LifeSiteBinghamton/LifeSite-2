import { FormControl } from '@angular/forms';

import { LsFieldBase } from './ls-field-base.class';
import { IFieldOptions } from './field-configuration.interface';


export class LsFieldInput extends LsFieldBase {
    fieldType: string = 'input';
    type: string;

    constructor(options: IFieldOptions) {
        super(options);
        this.type = options.type || 'text';
    }

    onInit(control: FormControl) {
        /* do nothing */
    }
}
