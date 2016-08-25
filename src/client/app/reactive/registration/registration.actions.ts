import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

// ---------------------------------------------------------------------------------------------------------
// Registration Actions
// ---------------------------------------------------------------------------------------------------------
@Injectable()
export class RegistrationActions {
    static INIT = `[Registration] Init`;
    static init(): Action {
        return {
            type: RegistrationActions.INIT
        };
    }

    static REGISTER = `[Registration] Registering`;
    static register(email: string): Action {
        return {
            type: RegistrationActions.REGISTER,
            payload: email
        };
    }

    static SUCCESS = `[Registration] Successful Registration`;
    static success(token: string, id: string): Action {
        return {
            type: RegistrationActions.SUCCESS,
            payload: {token: token, id: id}
        };
    }

    static FAILURE = `[Registration] Failed Registration`;
    static failure(error: string): Action {
        return {
            type: RegistrationActions.FAILURE,
            payload: error
        };
    }
}

// ---------------------------------------------------------------------------------------------------------
// Activation Actions
// ---------------------------------------------------------------------------------------------------------
@Injectable()
export class ActivationActions {
    static VALIDATED = `[Activation] Validated`;
    static validated(token: string, id: string): Action {
        return {
            type: ActivationActions.VALIDATED,
            payload: {token, id}
        };
    }

    static ACTIVATE = `[Activation] Activate`;
    static activate(password: string): Action {
        return {
            type: ActivationActions.ACTIVATE,
            payload: password
        };
    }

    static SUCCESS = `[Activation] Successful Activation`;
    static success(): Action {
        return {
            type: ActivationActions.SUCCESS
        };
    }

    static FAILURE = `[Activation] Failed Validation`;
    static failure(error: string): Action {
        return {
            type: ActivationActions.FAILURE,
            payload: error
        };
    }
}

// ---------------------------------------------------------------------------------------------------------
// Invalid activation Actions
// ---------------------------------------------------------------------------------------------------------
@Injectable()
export class InvalidActions {
    static INIT = `[Invalid] Init`;
    static init(): Action {
        return {
            type: InvalidActions.INIT
        };
    }
}
