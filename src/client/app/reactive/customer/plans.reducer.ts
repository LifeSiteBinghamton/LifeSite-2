import { Action, ActionReducer } from '@ngrx/store';

import { CustomerActions } from './customer.actions';
import { PlanModel } from 'models';

export interface IPlansState {
    plans: PlanModel[];
    loading: boolean;
    error: string;
}

const initialState: IPlansState = {
    plans: [],
    loading: false,
    error: null
};

export const plansReducer: ActionReducer<IPlansState> =
    (state: IPlansState = initialState, action: Action): IPlansState => {
        switch (action.type) {
            case CustomerActions.PLAN_LOAD: {
                return {
                    plans: [],
                    loading: true,
                    error: null
                };
            }

            case CustomerActions.PLAN_LOAD_SUCCESS: {
                return {
                    plans: action.payload,
                    loading: false,
                    error: null
                };
            }

            case CustomerActions.PLAN_LOAD_FAIL: {
                return {
                    plans: [],
                    loading: false,
                    error: action.payload
                };
            }

            default:
                return state;
        }
    };
