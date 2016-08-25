import { Action, ActionReducer } from '@ngrx/store';

import { RegistrationActions, ActivationActions, InvalidActions } from './registration.actions';

// ---------------------------------------------------------------------------------------------------------
// Registration Reducer
// ---------------------------------------------------------------------------------------------------------
export interface IRegistrationState {
    processing: boolean;
    emailSent: boolean;
    error: string;
    email: string;
    token: string;
    id: string;
}

const initialRegistrationState: IRegistrationState = <IRegistrationState>{
    processing: false,
    emailSent: false,
    error: null,
    email: null,
    token: null,
    id: null
};

export const registrationReducer: ActionReducer<IRegistrationState> =
    (state: IRegistrationState = initialRegistrationState, action: Action): IRegistrationState => {
        switch (action.type) {
            case RegistrationActions.INIT:
                return initialRegistrationState;

            case RegistrationActions.SUCCESS: {
                const {token, id} = action.payload;
                return {
                    processing: false,
                    emailSent: true,
                    error: null,
                    email: null,
                    token, id
                };
            }

            case RegistrationActions.REGISTER: {
                return {
                    processing: true,
                    emailSent: false,
                    error: null,
                    email: action.payload,
                    token: null,
                    id: null
                };
            }

            case RegistrationActions.FAILURE: {
                return {
                    processing: false,
                    emailSent: false,
                    error: action.payload,
                    email: null,
                    token: null,
                    id: null
                };
            }

            default:
                return state;
        }
    };

// ---------------------------------------------------------------------------------------------------------
// Activation Reducer
// ---------------------------------------------------------------------------------------------------------
export interface IActivationState {
    processing: boolean;
    isValid: boolean;
    isActivated: boolean;
    token: string;
    id: string;
    password: string;
    error: string;
}

const initialActivationState: IActivationState = <IActivationState>{
    processing: false,
    isValid: false,
    isActivated: false,
    token: null,
    id: null,
    password: null,
    error: null
};

export const activationReducer: ActionReducer<IActivationState> =
    (state: IActivationState = initialActivationState, action: Action): IActivationState => {
        switch (action.type) {
            case ActivationActions.VALIDATED: {
                const { token, id } = action.payload;
                return {
                    processing: false,
                    isValid: true,
                    isActivated: false,
                    password: null,
                    error: null,
                    token, id
                };
            }

            case ActivationActions.ACTIVATE: {
                return {
                    processing: true,
                    isValid: state.isValid,
                    isActivated: false,
                    token: state.token,
                    id: state.id,
                    password: action.payload,
                    error: null
                };
            }

            case ActivationActions.SUCCESS: {
                return {
                    processing: false,
                    isValid: true,
                    isActivated: true,
                    token: state.token,
                    id: state.id,
                    password: state.password,
                    error: null
                };
            }

            case ActivationActions.FAILURE: {
                return {
                    processing: false,
                    isValid: true,
                    isActivated: false,
                    token: state.token,
                    id: state.id,
                    password: state.password,
                    error: action.payload
                };
            }

            default:
                return state;
        }
    };

// ---------------------------------------------------------------------------------------------------------
// Invalid activation Reducer
// ---------------------------------------------------------------------------------------------------------
export interface IInvalidState {
    error: boolean;
}

const initialInvalidState: IInvalidState = <IInvalidState>{
    error: true
};

export const invalidReducer: ActionReducer<IInvalidState> =
    (state: IInvalidState = initialInvalidState, action: Action): IInvalidState => {
        switch (action.type) {
            case InvalidActions.INIT:
            default: {
                return initialInvalidState;
            }
        }
    };
