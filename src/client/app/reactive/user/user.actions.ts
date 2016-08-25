import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { UserModel } from 'models';

const CATEGORY = '[User]';

@Injectable()
export class UserActions {
    static INIT = `${CATEGORY} Init`;
    static init(): Action {
        return {
            type: UserActions.INIT
        };
    }

    static UPDATE = `${CATEGORY} Updated`;
    static update(user: UserModel): Action {
        return {
            type: UserActions.UPDATE,
            payload: user
        };
    }

    static THEME_UPDATED = `${CATEGORY} Theme Updated`;
    static changeTheme(theme: string): Action {
        return {
            type: UserActions.THEME_UPDATED,
            payload: theme
        };
    }
}
