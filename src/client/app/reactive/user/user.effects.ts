import { Injectable } from '@angular/core';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects';

import { IAppStore } from '../index';
import { UserActions } from './user.actions';
import { LoginActions } from '../login/index';
import { UserModel } from 'models';
import { UserService } from 'services';

@Injectable()
export class UserEffects {
    constructor(private updates$: StateUpdates<IAppStore>, private userService: UserService) {}

    @Effect() onLogout$ = this.updates$
        .whenAction(LoginActions.INIT)
        .map(() => UserActions.init());

    @Effect() setStorage$ = this.updates$
        .whenAction(UserActions.UPDATE)
        .map<UserModel>(toPayload)
        .do(user => sessionStorage.setItem('userId', user.id))
        .ignoreElements();

    @Effect() removeStorage$ = this.updates$
        .whenAction(UserActions.INIT)
        .do(() => sessionStorage.removeItem('userId'))
        .ignoreElements();

    // todo - error
    @Effect() onThemeChange$ = this.updates$
        .whenAction(UserActions.THEME_UPDATED)
        .map<string>(toPayload)
        .do((data) => this.userService.saveClient({selectedTheme: data}))
        .filter(() => false);
}

