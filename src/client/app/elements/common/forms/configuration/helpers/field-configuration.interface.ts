import { IValidator } from '../../validation/index';
import { ILsField } from './ls-field.interface';

export interface IFieldDefaultOptions {
    value?: string;
    key?: string;
    label?: string;
    order?: number;
    validators?: IValidator[];
}

export interface IFieldExtensibleOptions {
    // Select boxes, radios
    elements?: {display: string, value: string}[];

    // Input box type
    type?: string;

    // Form array
    fields?: IFieldConfiguration[];
    buttonLabel?: string;
}

export type IFieldOptions = IFieldDefaultOptions & IFieldExtensibleOptions;

export interface IFieldConfiguration {
    config: IFieldOptions;
    type: {
        new (options: IFieldOptions) : ILsField
    };
}
