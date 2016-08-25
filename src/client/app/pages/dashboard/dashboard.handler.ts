import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { UserModel } from 'models';
import { IAppStore, IUserState } from 'reactive';

/**
 * All `XHandler` classes should remove any `store` functionality outside the component.
 */
@Injectable()
export class DashboardHandler {
    public user$: Observable<UserModel>;

    constructor(private store: Store<IAppStore>) {
        const model$: Observable<IUserState> = <Observable<IUserState>>store.select('user').share();

        this.user$ = model$.map(user => user);
    }
}

