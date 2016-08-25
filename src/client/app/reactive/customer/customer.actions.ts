import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { CreditCardModel, PlanModel, EstimateModel, InvoiceModel } from 'models';

const CATEGORY = '[Customer]';

@Injectable()
export class CustomerActions {
    // ---------------------------------------------------------------------------------------------------------
    // Plan Actions
    // ---------------------------------------------------------------------------------------------------------
    static PLAN_LOAD = `${CATEGORY} Plan Load`;
    static planLoad(): Action {
        return {
            type: CustomerActions.PLAN_LOAD
        };
    }

    static PLAN_LOAD_SUCCESS = `${CATEGORY} Plan Load Success`;
    static planLoadSuccess(plans: PlanModel[]): Action {
        return {
            type: CustomerActions.PLAN_LOAD_SUCCESS,
            payload: plans
        };
    }

    static PLAN_LOAD_FAIL = `${CATEGORY} Plan Load Fail`;
    static planLoadFail(error: string): Action {
        return {
            type: CustomerActions.PLAN_LOAD_FAIL,
            payload: error
        };
    }

    static PLAN_CHANGE = `${CATEGORY} Plan Change`;
    static planChange(): Action {
        return {
            type: CustomerActions.PLAN_CHANGE
        };
    }

    static PLAN_CHANGE_SUCCESS = `${CATEGORY} Plan Change Success`;
    static planChangeSuccess(): Action {
        return {
            type: CustomerActions.PLAN_CHANGE_SUCCESS
        };
    }

    static PLAN_CHANGE_FAIL = `${CATEGORY} Plan Change Fail`;
    static planChangeFail(): Action {
        return {
            type: CustomerActions.PLAN_CHANGE_FAIL
        };
    }

    // ---------------------------------------------------------------------------------------------------------
    // Credit Card Actions
    // ---------------------------------------------------------------------------------------------------------
    static CREDIT_CARD_LOAD = `${CATEGORY} Credit Card Load`;
    static creditCardLoad(): Action {
        return {
            type: CustomerActions.CREDIT_CARD_LOAD
        };
    }

    static CREDIT_CARD_LOAD_SUCCESS = `${CATEGORY} Credit Card Load Success`;
    static creditCardLoadSuccess(creditCard: CreditCardModel): Action {
        return {
            type: CustomerActions.CREDIT_CARD_LOAD_SUCCESS,
            payload: creditCard
        };
    }

    static CREDIT_CARD_LOAD_FAIL = `${CATEGORY} Credit Card Load Fail`;
    static creditCardLoadFail(error: string): Action {
        return {
            type: CustomerActions.CREDIT_CARD_LOAD_FAIL,
            payload: error
        };
    }

    static CREDIT_CARD_CHANGE = `${CATEGORY} Credit Card Change`;
    static creditCardChange(creditCard: CreditCardModel): Action {
        return {
            type: CustomerActions.CREDIT_CARD_CHANGE,
            payload: creditCard
        };
    }

    static CREDIT_CARD_CHANGE_SUCCESS = `${CATEGORY} Credit Card Change Success`;
    static creditCardChangeSuccess(): Action {
        return {
            type: CustomerActions.CREDIT_CARD_CHANGE_SUCCESS
        };
    }

    static CREDIT_CARD_CHANGE_FAIL = `${CATEGORY} Credit Card Change Fail`;
    static creditCardChangeFail(error: string): Action {
        return {
            type: CustomerActions.CREDIT_CARD_CHANGE_FAIL,
            payload: error
        };
    }

    // ---------------------------------------------------------------------------------------------------------
    // Estimate Actions
    // ---------------------------------------------------------------------------------------------------------
    static ESTIMATE_LOAD = `${CATEGORY} Estimate Load`;
    static estimateLoad(): Action {
        return {
            type: CustomerActions.ESTIMATE_LOAD
        };
    }

    static ESTIMATE_LOAD_SUCCESS = `${CATEGORY} Estimate Load Success`;
    static estimateLoadSuccess(estimate: EstimateModel): Action {
        return {
            type: CustomerActions.ESTIMATE_LOAD_SUCCESS,
            payload: estimate
        };
    }

    static ESTIMATE_LOAD_FAIL = `${CATEGORY} Estimate Load Fail`;
    static estimateLoadFail(error: string): Action {
        return {
            type: CustomerActions.ESTIMATE_LOAD_FAIL,
            payload: error
        };
    }

    static APPLY_COUPON_CODE = `${CATEGORY} Apply Coupon Code`;
    static applyCouponCode(couponCode: string): Action {
        return {
            type: CustomerActions.APPLY_COUPON_CODE,
            payload: couponCode
        };
    }

    static COUPON_CODE_SUCCESS = `${CATEGORY} Coupon Code Success`;
    static couponCodeSuccess(estimate: EstimateModel): Action {
        return {
            type: CustomerActions.COUPON_CODE_SUCCESS,
            payload: estimate
        };
    }

    static COUPON_CODE_FAIL = `${CATEGORY} Coupon Code Fail`;
    static couponCodeFail(error: string): Action {
        return {
            type: CustomerActions.COUPON_CODE_FAIL,
            payload: error
        };
    }

    // ---------------------------------------------------------------------------------------------------------
    // Invoice Actions
    // ---------------------------------------------------------------------------------------------------------
    static INVOICE_LOAD = `${CATEGORY} Receipts Load`;
    static invoiceLoad(): Action {
        return {
            type: CustomerActions.INVOICE_LOAD
        };
    }

    static INVOICE_LOAD_SUCCESS = `${CATEGORY} Receipts Load Success`;
    static invoiceLoadSuccess(invoices: InvoiceModel[]): Action {
        return {
            type: CustomerActions.INVOICE_LOAD_SUCCESS,
            payload: invoices
        };
    }

    static INVOICE_LOAD_FAIL = `${CATEGORY} Receipts Load Fail`;
    static invoiceLoadFail(error: string): Action {
        return {
            type: CustomerActions.INVOICE_LOAD_FAIL,
            payload: error
        };
    }
}

