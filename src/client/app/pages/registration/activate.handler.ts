import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { IAppStore, IActivationState, ActivationActions } from 'reactive';

@Injectable()
export class ActivateHandler {
    public isProcessing$: Observable<boolean>;
    public isSuccess$: Observable<boolean>;
    public isError$: Observable<string>;
    public isVerified$: Observable<boolean>;

    constructor(private store: Store<IAppStore>) {
        const model$: Observable<IActivationState> =
            <Observable<IActivationState>>store.select('activation').share();

        this.isProcessing$ = model$.map(data => data.processing);
        this.isError$ = model$.map(data => data.error);
        this.isSuccess$ = model$.map(data => data.isActivated);
        this.isVerified$ = model$.map(data => data.isValid);
    }

    activate(password: string) {
        this.store.dispatch(ActivationActions.activate(password));
    }
}
