import { Action, ActionReducer } from '@ngrx/store';

import { CustomerActions } from './customer.actions';
import { EstimateModel } from 'models';

export interface IEstimateState {
    estimate: EstimateModel;
    loading: boolean;
    error: string;
    couponCode: string;
}

const initialState: IEstimateState = {
    estimate: null,
    loading: false,
    error: null,
    couponCode: null
};

export const estimateReducer: ActionReducer<IEstimateState> =
    (state: IEstimateState = initialState, action: Action): IEstimateState => {
        switch (action.type) {
            case CustomerActions.ESTIMATE_LOAD: {
                return {
                    estimate: null,
                    loading: true,
                    error: null,
                    couponCode: null
                };
            }

            case CustomerActions.ESTIMATE_LOAD_SUCCESS: {
                return {
                    estimate: action.payload,
                    loading: false,
                    error: null,
                    couponCode: null
                };
            }

            case CustomerActions.ESTIMATE_LOAD_FAIL: {
                return {
                    estimate: null,
                    loading: false,
                    error: action.payload,
                    couponCode: null
                };
            }

            case CustomerActions.APPLY_COUPON_CODE: {
                return Object.assign({}, state, {
                    loading: true,
                    error: null,
                    couponCode: action.payload
                });
            }

            case CustomerActions.COUPON_CODE_SUCCESS: {
                return Object.assign({}, state, {
                    estimate: action.payload,
                    loading: false,
                    error: null
                });
            }

            case CustomerActions.COUPON_CODE_FAIL: {
                return Object.assign({}, state, {
                    loading: false,
                    error: action.payload
                });
            }

            default:
                return state;
        }
    };

