import { FormControl } from '@angular/forms';

import { LsFieldBase } from './ls-field-base.class';
import { IFieldOptions } from './field-configuration.interface';
import { FormSelectOption } from './index';


export class LsSelectField extends LsFieldBase {
    fieldType: string = 'select';
    options: FormSelectOption[];

    constructor(options: IFieldOptions) {
        super(options);
        this.options = options.elements || [];
    }

    onInit(control: FormControl) {
        control.updateValue(this.value || this.options[0].value || '');
    }
}
