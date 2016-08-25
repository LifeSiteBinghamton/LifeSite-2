import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { FormComponent } from 'frameworks';
import { LsDynamicFormService } from './ls-dynamic-form.service';
import { LsField } from '../lsfield/ls-field.component';
import { IFormConfiguration, ILsField, FormEvent } from '../helpers/index';

@FormComponent({
    moduleId: module.id,
    selector: 'ls-dynamic-form',
    templateUrl: 'ls-dynamic-form.html',
    directives: [LsField],
    providers: [FormBuilder, LsDynamicFormService]
})
export class LsDynamicForm implements OnInit {
    @Input() formId: string;
    @Input() configuration: IFormConfiguration;
    @Output() submitEvent: EventEmitter<FormEvent> = new EventEmitter<FormEvent>();

    public form: FormGroup;
    public fields: ILsField[];

    constructor(fb: FormBuilder) {
        this.form = fb.group({});
    }

    ngOnInit() {
        this.fields = LsDynamicFormService.getFields(this.configuration);
        this.fields.forEach((field) => {
            this.form.addControl(field.key, new FormControl(field.value || ''));
        });
    }

    doSubmit() {
        this.submitEvent.emit({
            value: this.form.value,
            id: this.formId
        });
    }

    get valid() {
        return this.form.valid;
    }
}
