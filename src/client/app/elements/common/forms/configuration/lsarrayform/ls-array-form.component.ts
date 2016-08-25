// import { Input, forwardRef, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

import { BaseComponent } from 'frameworks';
// import { LsDynamicForm } from '../lsdynamicform/ls-dynamic-form.component';
// import { LsFormField } from '../lsformfield/ls-form-field.component';
// import { IFormConfiguration, IField, IFieldOptions } from '../interfaces/index';

// type FormValue = {[key: string]: any};

@BaseComponent({
    moduleId: module.id,
    selector: 'ls-array-form',
    templateUrl: 'ls-array-form.html'
    //directives: [forwardRef(() => LsFormField)]
})
export class LsArrayForm {
    // @Input() configuration: IFormConfiguration = null;
    // @Input() parent: LsDynamicForm;
    //
    // public fields: IField<any>[] = [];
    //
    // private controls: {key: string, control: FormControl}[][] = [];
    // private form: FormGroup;
    // private fieldConfiguration: IFormConfiguration[];
    // private _index = 0;
    //
    // ngOnInit() {
    //     if (!this.configuration) {
    //         throw new Error('----DEVELOPER ERROR---- You need to provide configuration for LsArrayForm.');
    //     }
    //
    //     this.fieldConfiguration = this.configuration.config.fields;
    //     this.form = this.parent.form;
    //     this.parent.registerFormArray(this);
    //
    //     this.init(this.configuration.config.value);
    // }
    //
    // get value(): {[key: string]: FormValue[]} {
    //     let ret: FormValue[] = [];
    //
    //     this.controls.forEach((array) => {
    //         let obj = {};
    //         array.forEach((control) => {
    //             obj[control.key] = control.control.value;
    //         });
    //         ret.push(obj);
    //     });
    //     return {
    //         [this.configuration.config.key]: ret
    //     };
    // }
    //
    // /**
    //  * Add a dynamic field to the current array form. This is a different function from `init` even though it has many
    //  * of the same code. This is because it's clearer to separate them - this function only adds blank fields to the
    //  * form, so the user needs to actually put some data in there.
    //  */
    // addMoreFields() {
    //     let controls = [];
    //
    //     this.fieldConfiguration.forEach((fieldConfiguration) => {
    //         let control = this.configureAField(
    //             fieldConfiguration.config,
    //             fieldConfiguration.type
    //         );
    //         controls.push(control);
    //     });
    //     this._index++;
    //     this.controls.push(controls);
    // }
    //
    // /**
    //  * Initialize the {@link LsFormField}s that are present in this array form. We only execute this function if we
    //  * have some data from the server, otherwise, the user needs to add some more dynamic fields to actually save
    //  * data.
    //  *
    //  * @param data An array of key-value pairs from the server. This array should look something like this:
    //  *             `[ {field_one: "value_one", field_two: "value_two"}, {field_one: "value_one", field_two: "value_two"}
    //  *                ...
    //  *              ]`. A form array is basically made up of multiple of the same key-value pairs where the key is the
    //  *              input/select/radio/etc key, and the value is the user's selected/typed input.
    //  */
    // private init(data: FormValue[] = []) {
    //     if (!data.length) {
    //         return;
    //     }
    //
    //     data.forEach((keyValuePairs: FormValue) => {
    //         let controls: {key: string, control: FormControl}[] = [];
    //
    //         this.fieldConfiguration.forEach((fieldConfiguration: IFormConfiguration) => {
    //             let value = keyValuePairs[fieldConfiguration.config.key];
    //             let control = this.configureAField(
    //                 fieldConfiguration.config,
    //                 fieldConfiguration.type,
    //                 value
    //             );
    //             controls.push(control);
    //         });
    //
    //         this._index++;
    //         this.controls.push(controls);
    //     });
    // }
    //
    // /**
    //  * Configure a single {@link LsFormField} based on the {@link IFormConfiguration#config} and
    //  * {@link IFormConfiguration#type} of the field.
    //  *
    //  * @param {IFieldOptions} config The options for the field we are setting up.
    //  *
    //  * @param {{new (options: IFieldOptions<any>): IField<any>}} type The `constructor` for an {@link IField}.
    //  *
    //  * @param {any} data The value of the {@link IField}, if there is one.
    //  *
    //  * @returns {{key: string, control: FormControl}} Returns the {@link FormControl} that handles this {@link IField}.
    //  */
    // private configureAField(config: IFieldOptions<any>,
    //                         type: {new (options: IFieldOptions<any>): IField<any>},
    //                         data: any = ''): {key: string, control: FormControl} {
    //     let control = new FormControl(data);
    //
    //     let options: IFieldOptions<any> = Object.assign({}, config);
    //     options.value = data;
    //     options.key = `${config.key}_${this._index}`;
    //
    //     let field = new type(options);
    //     this.form.addControl(field.key, control);
    //     this.fields.push(field);
    //
    //     return {
    //         key: config.key,
    //         control: control
    //     };
    // }
}
