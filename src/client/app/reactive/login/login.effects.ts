import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { IAppStore, UserActions } from '../index';
import { LoginActions } from './login.actions';
import { PublicUserModel } from 'models';
import { LoginService, UserService } from 'services';

@Injectable()
export class LoginEffects {
    constructor(private updates$: StateUpdates<IAppStore>,
                private store: Store<IAppStore>,
                private loginService: LoginService,
                private userService: UserService) {}

    @Effect() login$ = this.updates$
        .whenAction(LoginActions.LOG_IN)
        .map<PublicUserModel>(toPayload)
        .switchMap(
            userModel => this.loginService.login(userModel.email, userModel.password)
                .switchMap(accessToken => this.userService.getClient(accessToken).map(user => UserActions.update(user)))
                .catch(error => Observable.of(LoginActions.loginFail(error.json().error)))
        )
        .do((result) => {
            if (result && result.type && result.type !== LoginActions.LOG_IN_FAIL) {
                this.store.dispatch(LoginActions.loginSuccess());
            }
        });
}
