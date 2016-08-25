import { ValidatorFn } from '@angular/forms';

export enum ValidatorType {
    CreditCard,
    Email,
    Password,
    MatchingPasswords,
    Required
}

export enum ValidatorStyle {
    Popover,
    Simple
}

export interface IValidator {
    message: string;
    type: ValidatorType;
    errorKey: string;

    getMessage(): string;
    getErrorKey(): string;
    getType(): ValidatorType;
    getValidator(): ValidatorFn;
    isValid(value: any): boolean;
}

export interface IValidatorOptions {
    message: string;
}
