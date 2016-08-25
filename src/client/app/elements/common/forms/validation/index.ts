import { ValidatorType, IValidatorOptions, IValidator } from './validation.interface';
import { EmailValidator } from './email-validator';
import { CreditCardValidator } from './credit-card-validator';
import { MismatchedPasswordValidator } from './mismatched-passwords-validator';
import { PasswordValidator } from './password-validator';
import { RequiredValidator } from './required-validator';

export function getValidator(type: ValidatorType, options?: IValidatorOptions): IValidator {
    switch (type) {
        case ValidatorType.CreditCard:          return new CreditCardValidator(options);
        case ValidatorType.Email:               return new EmailValidator(options);
        case ValidatorType.MatchingPasswords:   return new MismatchedPasswordValidator(options);
        case ValidatorType.Password:            return new PasswordValidator(options);
        case ValidatorType.Required:            return new RequiredValidator(options);

        default:
            throw new Error(`You've supplied an invalid validator type.`);
    }
}

export * from './validation.interface';
export * from './validator-display.component';
