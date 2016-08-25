import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';

import { WizardModel, WizardStyle } from 'models';
import { IAppStore } from '../index';
import { WizardActions } from './wizard.actions';
import { IWizardState } from './wizard.reducer';

@Injectable()
export class WizardHandler {
    public currentStep$: Observable<number>;
    public isProcessing$: Observable<boolean>;
    public isCompleted$: Observable<boolean>;
    public dataLoaded$: Observable<any>;
    public wizardStyle$: Observable<WizardStyle>;

    constructor(private store: Store<IAppStore>) {
        const model$: Observable<IWizardState> = <Observable<IWizardState>>store.select('wizard').share();

        this.currentStep$ = model$.map(data => data.currentStepIndex);
        this.isProcessing$ = model$.map(data => data.processing);
        this.isCompleted$ = model$.map(data => data.completed).filter(completed => completed === true);
        this.dataLoaded$ = model$.map(data => data.dataFromServer);
        this.wizardStyle$ = model$.map(data => data.data.style);
    }

    /**
     * We need to manually connect our `@ngrx/effects` because if we don't, every time there's a change in our app,
     * the wizard effects will fire - even if there's no wizard present on the screen!
     *
     * @param effects An array of {@link Effect}s.
     *
     * @returns {Array} An array of {@link Subscription}s which we can then `unsubscribe` from when the component is
     *                  destroyed.
     */
    setEffects(...effects: any[]): Subscription[] {
        let subscriptions = [];
        effects.forEach(effect => {
            subscriptions.push(effect.subscribe(this.store));
        });
        return subscriptions;
    }

    init(data: WizardModel) {
        this.store.dispatch(WizardActions.init(data));
    }

    next(data: any) {
        this.store.dispatch(WizardActions.next(data));
    }

    back() {
        this.store.dispatch(WizardActions.back());
    }
}
