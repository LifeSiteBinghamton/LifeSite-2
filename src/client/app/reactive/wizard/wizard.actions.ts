import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { WizardModel } from 'models';

const CATEGORY = '[Wizard]';

@Injectable()
export class WizardActions {
    static INIT = `${CATEGORY} Init`;
    static init(data: WizardModel): Action {
        return {
            type: WizardActions.INIT,
            payload: data
        };
    }

    static LOADED = `${CATEGORY} Data Loaded`;
    static loaded(data: any): Action {
        return {
            type: WizardActions.LOADED,
            payload: data
        };
    }

    static NEXT = `${CATEGORY} Next page`;
    static next(data: any): Action {
        return {
            type: WizardActions.NEXT,
            payload: data
        };
    }

    static BACK = `${CATEGORY} Previous page`;
    static back(): Action {
        return {
            type: WizardActions.BACK
        };
    }

    static COMPLETE = `${CATEGORY} Complete`;
    static complete(): Action {
        return {
            type: WizardActions.COMPLETE
        };
    }

    static GO_TO_STEP = `${CATEGORY} Go To Step`;
    static goToStep(step: number): Action {
        return {
            type: WizardActions.GO_TO_STEP,
            payload: step
        };
    }
}

