import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { PublicUserModel } from 'models';

const CATEGORY = '[Login]';

@Injectable()
export class LoginActions {
    static INIT = `${CATEGORY} Init`;
    static init(): Action {
        return {
            type: LoginActions.INIT
        };
    }

    static LOG_IN = `${CATEGORY} Attempt`;
    static login(user: PublicUserModel): Action {
        return {
            type: LoginActions.LOG_IN,
            payload: user
        };
    }

    static LOG_IN_FAIL = `${CATEGORY} Failure`;
    static loginFail(error: any): Action {
        return {
            type: LoginActions.LOG_IN_FAIL,
            payload: error.code
        };
    }

    static LOG_IN_SUCCESS = `${CATEGORY} Success`;
    static loginSuccess(): Action {
        return {
            type: LoginActions.LOG_IN_SUCCESS
        };
    }

    static PAGE_REFRESH = `${CATEGORY} Page Refreshed`;
    static pageRefresh(): Action {
        return {
            type: LoginActions.PAGE_REFRESH
        };
    }
}
