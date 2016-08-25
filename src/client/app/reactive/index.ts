export * from './customer/index';
export * from './login/index';
export * from './onboarding/onboarding.effects';
export * from './user/index';
export * from './registration/index';
export * from './wizard/index';

// Framework
import { multilingualReducer, MultilingualStateI } from 'frameworks';

// User
import { userReducer, UserEffects, IUserState } from './user/index';

// Login
import { loginReducer, LoginEffects, ILoginState } from './login/index';

// Registration, Activation, Invalid activation
import {
    registrationReducer,
    RegistrationEffects,
    IRegistrationState,
    activationReducer,
    IActivationState,
    invalidReducer,
    IInvalidState
} from './registration/index';

// Chargebee
import {
    CustomerEffects,
    ICreditCardState,
    creditCardReducer,
    IEstimateState,
    estimateReducer,
    IInvoiceState,
    invoicesReducer,
    IPlansState,
    plansReducer
} from './customer/index';

// Wizard
import { wizardReducer, IWizardState, WizardEffects } from './wizard/index';

/**
 * Our applications main store
 */
export interface IAppStore {
    il8n: MultilingualStateI;
    login: ILoginState;
    user: IUserState;
    registration: IRegistrationState;
    activation: IActivationState;
    invalidActivation: IInvalidState;
    creditCard: ICreditCardState;
    estimate: IEstimateState;
    invoice: IInvoiceState;
    plan: IPlansState;
    wizard: IWizardState;
}

// Ngrx effects
export const NGRX_EFFECTS = [
    LoginEffects,
    UserEffects,
    RegistrationEffects,
    CustomerEffects,
    WizardEffects
];

// Ngrx reducers
export const NGRX_REDUCERS = {
    i18n: multilingualReducer,
    login: loginReducer,
    user: userReducer,
    registration: registrationReducer,
    activation: activationReducer,
    invalidActivation: invalidReducer,
    creditCard: creditCardReducer,
    estimate: estimateReducer,
    invoice: invoicesReducer,
    plan: plansReducer,
    wizard: wizardReducer
};
