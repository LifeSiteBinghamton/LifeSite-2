import { Action, ActionReducer } from '@ngrx/store';

import { PublicUserModel } from 'models';
import { LoginActions } from './login.actions';

export interface ILoginState {
    loggedIn: boolean;
    processing: boolean;
    user: PublicUserModel;
    error: string;
}

const initialState: ILoginState = <ILoginState>{
    loggedIn: false,
    processing: false,
    user: null,
    error: null
};

export const loginReducer: ActionReducer<ILoginState> =
    (state: ILoginState = initialState, action: Action): ILoginState => {
        switch (action.type) {
            case LoginActions.INIT: {
                return initialState;
            }

            case LoginActions.LOG_IN: {
                return {
                    loggedIn: false,
                    processing: true,
                    user: action.payload,
                    error: null
                };
            }

            case LoginActions.LOG_IN_SUCCESS: {
                return {
                    loggedIn: true,
                    processing: false,
                    user: null,
                    error: null
                };
            }

            case LoginActions.PAGE_REFRESH: {
                return Object.assign({}, state, {loggedIn: true});
            }

            case LoginActions.LOG_IN_FAIL: {
                return {
                    loggedIn: false,
                    processing: false,
                    user: null,
                    error: action.payload
                };
            }

            default:
                return state;
        }
    };
