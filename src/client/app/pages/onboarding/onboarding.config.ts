import { IFormConfiguration, LsFieldInput, ValidatorType, getValidator } from 'elements';

export const ONBOARDING_CONFIG: IFormConfiguration[] = [
    {
        fields: [
            {
                config: {
                    key: 'first_name',
                    label: `What's your first name?`,
                    validators: [getValidator(ValidatorType.Required)]
                },
                type: LsFieldInput
            }
        ]
    },
    {
        fields: [
            {
                config: {
                    key: 'last_name',
                    label: `What's your last name?`
                },
                type: LsFieldInput
            }
        ]
    }
];
