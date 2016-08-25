export * from './field-configuration.interface';
export * from './form-configuration.interface';
export * from './ls-field.interface';
export * from './ls-field-base.class';
export * from './ls-field-input.class';
export * from './ls-field-select.class';

export type FormValue = {[key: string]: any};

export interface FormEvent {
    value: FormValue;
    id?: string;
}

export interface FormSelectOption {
    display: string;
    value: string;
}
