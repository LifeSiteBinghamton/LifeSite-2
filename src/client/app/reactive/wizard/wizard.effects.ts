import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateUpdates, Effect } from '@ngrx/effects';
import * as _ from 'lodash';

import { IAppStore, WizardActions, IWizardState } from 'reactive';
import { WizardStepModel } from 'models';

@Injectable()
export class WizardEffects {
    constructor(private update$: StateUpdates<IAppStore>, private store: Store<IAppStore>) {}

    @Effect() onWizardComplete$ = this.update$
        .whenAction(WizardActions.NEXT, WizardActions.GO_TO_STEP)
        .map((store) => {
            return store.state.wizard;
        })
        .filter(state => state.completed === true)
        .do(() => this.store.dispatch(WizardActions.complete()))
        .filter(() => false);

    @Effect() onWizardDataLoaded$ = this.update$
        .whenAction(WizardActions.LOADED)
        .map((store) => {
            return store.state.wizard;
        })
        .do((wizard: IWizardState) => {
            let dataFromServer = wizard.dataFromServer;
            let steps: WizardStepModel[] = wizard.data.steps;
            let currentStep = -1;

            for (let i = 0; i < steps.length; i++) {
                let step: WizardStepModel = steps[i];
                let hasData = _.every(step.fields, (field: string) => {
                    return dataFromServer.hasOwnProperty(field) &&
                        (typeof dataFromServer[field] !== 'undefined' && dataFromServer[field] !== '');
                });

                /**
                 * As we are looping through each step in the current wizard, we need to check if the user has already
                 * completed the step that we're processing. We do this by looking at the data we got from the server
                 * and comparing those data fields with the fields in each step. If a field is present in the server
                 * data AND it is not undefined, that field has already been completed by the user. If the field is not
                 * present, then the user has yet to finish that particular step - so we should set the current wizard
                 * step index to that step's index.
                 */
                if (!hasData) {
                    currentStep = step.index;
                    break;
                }
            }

            this.store.dispatch(WizardActions.goToStep(currentStep === -1 ? steps.length : currentStep));
        })
        .filter(() => false);
}
