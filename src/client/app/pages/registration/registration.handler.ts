import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { IAppStore, IRegistrationState, RegistrationActions } from 'reactive';

/**
 * All `XHandler` classes should remove any `store` functionality outside the component.
 */
@Injectable()
export class RegistrationHandler {
    public emailSent$: Observable<boolean>;
    public isProcessing$: Observable<boolean>;
    public isError$: Observable<string>;

    // Use for E2E tests only
    public token$: Observable<string>;
    public id$: Observable<string>;

    constructor(private store: Store<IAppStore>) {
        const model$: Observable<IRegistrationState> =
            <Observable<IRegistrationState>>store.select('registration').share();

        this.emailSent$ = model$.map(data => data.emailSent).filter(data => data === true);
        this.isProcessing$ = model$.map(data => data.processing);
        this.isError$ = model$.map(data => data.error);

        // Used for E2E tests only
        this.token$ = model$.map(data => data.token);
        this.id$ = model$.map(data => data.id);
    }

    init() {
        this.store.dispatch(RegistrationActions.init());
    }

    register(email: string) {
        this.store.dispatch(RegistrationActions.register(email));
    }
}
