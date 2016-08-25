import { Action, ActionReducer } from '@ngrx/store';

import { CustomerActions } from './customer.actions';
import { CreditCardModel } from 'models';

export interface ICreditCardState {
    creditCard: CreditCardModel;
    loading: boolean;
    error: string;
}

const initialState: ICreditCardState = {
    creditCard: null,
    loading: false,
    error: null
};

export const creditCardReducer: ActionReducer<ICreditCardState> =
    (state: ICreditCardState = initialState, action: Action): ICreditCardState => {
        switch (action.type) {
            case CustomerActions.CREDIT_CARD_LOAD: {
                return {
                    creditCard: null,
                    loading: true,
                    error: null
                };
            }

            case CustomerActions.CREDIT_CARD_LOAD_SUCCESS: {
                return {
                    creditCard: action.payload,
                    loading: false,
                    error: null
                };
            }

            case CustomerActions.CREDIT_CARD_LOAD_FAIL: {
                return {
                    creditCard: null,
                    loading: false,
                    error: action.payload
                };
            }

            case CustomerActions.CREDIT_CARD_CHANGE: {
                return {
                    creditCard: action.payload,
                    loading: true,
                    error: null
                };
            }

            case CustomerActions.CREDIT_CARD_CHANGE_SUCCESS: {
                return Object.assign({}, state, {
                    loading: false,
                    error: null
                });
            }

            case CustomerActions.CREDIT_CARD_CHANGE_FAIL: {
                return Object.assign({}, state, {
                    loading: false,
                    error: action.payload
                });
            }

            default:
                return state;
        }
    };

