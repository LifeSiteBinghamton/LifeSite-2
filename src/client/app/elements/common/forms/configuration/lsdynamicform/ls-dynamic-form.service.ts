import { Injectable } from '@angular/core';

import { IFormConfiguration, IFieldConfiguration, ILsField } from '../helpers/index';

@Injectable()
export class LsDynamicFormService {
    static getFields(config: IFormConfiguration): ILsField[] {
        if (LsDynamicFormService.hasArrayConfiguration(config)) {
            return [];
        }

        return config.fields.map((fieldConfiguration: IFieldConfiguration) => {
            let fieldFn = fieldConfiguration.type;
            return new fieldFn(fieldConfiguration.config);
        });
    }

    static hasArrayConfiguration(config: IFormConfiguration): boolean {
        return config.fields.some((fieldConfiguration: IFieldConfiguration) => {
            return fieldConfiguration.type === null;
        });
    }
}
