import { Action, ActionReducer } from '@ngrx/store';

import { Config } from 'frameworks';
import { UserModel } from 'models';
import { UserActions } from './user.actions';

export type IUserState = UserModel & { selectedPlanId: string };

const initialState: IUserState = <IUserState>{
    first_name: '',
    last_name: '',
    email: '',
    id: '',
    two_factor_enabled: false,
    customer: null,
    subscription: null,
    selectedPlanId: Config.SUBSCRIPTIONS.BASIC,
    selectedTheme: 'lifesite-default-theme'
};

export const userReducer: ActionReducer<IUserState> =
    (state: IUserState = initialState, action: Action): IUserState => {
        switch (action.type) {
            case UserActions.INIT: {
                return initialState;
            }

            case UserActions.UPDATE: {
                let subscription = action.payload.subscription;
                return Object.assign({}, state, action.payload, {
                    selectedPlanId: subscription ? subscription.plan_id : state.selectedPlanId
                });
            }

            case UserActions.THEME_UPDATED: {
                return Object.assign({}, state, {
                    selectedTheme: action.payload
                });
            }

            default:
                return state;
        }
    };
