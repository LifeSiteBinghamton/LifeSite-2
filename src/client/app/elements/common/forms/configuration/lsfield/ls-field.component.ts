import { Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FormComponent } from 'frameworks';
import { ILsField } from '../helpers/index';
import { ValidatorStyle, ValidatorDisplay } from '../../validation/index';

@FormComponent({
    moduleId: module.id,
    selector: 'ls-field',
    templateUrl: 'ls-field.html',
    directives: [ValidatorDisplay]
})
export class LsField implements OnInit {
    @Input() field: ILsField;
    @Input() form: FormGroup;
    @Input() validatorStyle: ValidatorStyle = ValidatorStyle.Popover;
    @Input() validatorDisplayImmediate: boolean = true;

    ngOnInit() {
        let control = <FormControl>this.form.controls[this.field.key];
        if (control) {
            this.field.onInit(control);
            this.field.initializeValidators(control);
        }
    }

    get isValid() {
        return this.form.controls[this.field.key].valid;
    }

    get isTouched() {
        return this.form.controls[this.field.key].touched;
    }

    get validatorMessage() {
        return this.validatorStyle === ValidatorStyle.Simple
            ? '' : this.field.getInvalidMessage(this.form.controls[this.field.key].errors);
    }

    get showValidator(): boolean {
        let show = false;
        if (!this.isValid && this.isTouched) {
            show = true;
        }

        if (!this.validatorDisplayImmediate) {
            show = false;
        }

        return show;
    }
}
