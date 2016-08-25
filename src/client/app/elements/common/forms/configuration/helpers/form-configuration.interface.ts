import { IFieldConfiguration } from './field-configuration.interface';
import { ValidatorStyle } from '../../validation/index';

export interface IFormConfiguration {
    fields: IFieldConfiguration[];
    validatorsDisplayImmediate?: boolean;
    validatorStyle?: ValidatorStyle;
}
