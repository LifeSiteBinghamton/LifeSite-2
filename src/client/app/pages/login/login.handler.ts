import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { IAppStore, ILoginState, LoginActions } from 'reactive';

/**
 * All `XHandler` classes should remove any `store` functionality outside the component.
 */
@Injectable()
export class LoginHandler {
    public isLoggedIn$: Observable<boolean>;
    public isProcessing$: Observable<boolean>;
    public isError$: Observable<string>;

    constructor(private store: Store<IAppStore>) {
        const model$: Observable<ILoginState> = <Observable<ILoginState>>store.select('login').share();

        this.isLoggedIn$ = model$.map(data => data.loggedIn).filter(data => data === true);
        this.isProcessing$ = model$.map(data => data.processing);
        this.isError$ = model$.map(data => data.error);
    }

    init() {
        this.store.dispatch(LoginActions.init());
    }

    login(val) {
        this.store.dispatch(LoginActions.login(val));
    }
}
