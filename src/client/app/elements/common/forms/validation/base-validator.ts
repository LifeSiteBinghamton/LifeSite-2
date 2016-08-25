import { ValidatorFn } from '@angular/forms';

import { ValidatorType, IValidator, IValidatorOptions } from './validation.interface';

export abstract class BaseValidator implements IValidator {
    message: string;
    type: ValidatorType;
    errorKey: string;

    constructor(type: ValidatorType,
                errorKey: string,
                options: IValidatorOptions = {message: ''}) {
        if (!type || !errorKey) {
            throw new Error(`---- DEVELOPER ERROR ----- You must supply the type and errorKey of this validator.\n
                            Arguments supplied: ${arguments}`);
        }
        this.type = type;
        this.errorKey = errorKey;
        this.message = options.message;
    }

    getMessage(): string {
        return this.message;
    }

    getErrorKey(): string {
        return this.errorKey;
    }

    getType(): ValidatorType {
        return this.type;
    }

    abstract isValid(valid: any): boolean;
    abstract getValidator(): ValidatorFn;
}
