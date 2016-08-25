import { Action, ActionReducer } from '@ngrx/store';

import { CustomerActions } from './customer.actions';
import { InvoiceModel } from 'models';

export interface IInvoiceState {
    invoices: InvoiceModel[];
    loading: boolean;
    error: string;
}

const initialState: IInvoiceState = {
    invoices: [],
    loading: false,
    error: null
};

export const invoicesReducer: ActionReducer<IInvoiceState> =
    (state: IInvoiceState = initialState, action: Action): IInvoiceState => {
        switch (action.type) {
            case CustomerActions.INVOICE_LOAD: {
                return {
                    invoices: [],
                    loading: true,
                    error: null
                };
            }

            case CustomerActions.INVOICE_LOAD_SUCCESS: {
                return {
                    invoices: action.payload,
                    loading: false,
                    error: null
                };
            }

            case CustomerActions.INVOICE_LOAD_FAIL: {
                return {
                    invoices: [],
                    loading: false,
                    error: action.payload
                };
            }

            default:
                return state;
        }
    };

