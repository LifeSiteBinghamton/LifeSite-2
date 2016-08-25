import { Action, ActionReducer } from '@ngrx/store';
import * as _ from 'lodash';

import { WizardActions } from './wizard.actions';
import { WizardModel, WizardStyle } from 'models';

export interface IWizardState {
    data: WizardModel;
    currentStepIndex: number;
    processing: boolean;
    dataFromServer: any;
    dataToSendToServer: any;
    completed: boolean;
}

const initialState: IWizardState = {
    data: {
        steps: [],
        style: WizardStyle.Slide
    },
    currentStepIndex: 0,
    processing: false,
    completed: false,
    dataFromServer: null,
    dataToSendToServer: null
};

export const wizardReducer: ActionReducer<IWizardState> =
    (state: IWizardState = initialState, action: Action): IWizardState => {
        switch (action.type) {
            case WizardActions.INIT: {
                return {
                    data: action.payload,
                    currentStepIndex: 0,
                    processing: true,
                    completed: false,
                    dataFromServer: null,
                    dataToSendToServer: null,
                };
            }

            case WizardActions.LOADED: {
                return Object.assign({}, state, {
                    processing: false,
                    dataFromServer: action.payload
                });
            }

            case WizardActions.NEXT: {
                let dataToSendToServer = _.merge(state.dataToSendToServer, action.payload);

                if (state.currentStepIndex + 1 >= state.data.steps.length) {
                    return Object.assign({}, state, {
                        dataToSendToServer: dataToSendToServer,
                        completed: true
                    });
                }

                return Object.assign({}, state, {
                    dataToSendToServer: dataToSendToServer,
                    currentStepIndex: state.currentStepIndex + 1
                });
            }

            case WizardActions.BACK: {
                return Object.assign({}, state, {
                    currentStepIndex: (state.currentStepIndex - 1 < 0) ? 0 : state.currentStepIndex - 1
                });
            }

            case WizardActions.GO_TO_STEP: {
                if (action.payload >= state.data.steps.length) {
                    return Object.assign({}, state, {
                        completed: true
                    });
                }

                return Object.assign({}, state, {
                    currentStepIndex: action.payload
                });
            }

            default:
                return state;
        }
    };
