import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as _ from 'lodash';

import { ITheme } from './theme.interface';
import { IAppStore, IUserState, UserActions } from 'reactive';
import { BaseService, UserService } from 'services';

@Injectable()
export class ThemeService extends BaseService {
    public static AVAILABLE_THEMES: ITheme[] = [
        {key: 'lifesite-default-theme', name: 'LifeSite Default Theme'}
    ];

    public currentTheme$: Observable<string>;

    constructor(private store: Store<IAppStore>, http: Http) {
        super(http);
        this.currentTheme$ = (<Observable<IUserState>>this.store.select('user')).map(data => data.selectedTheme);
    }

    changeTheme(theme: string) {
        if (_.includes(_.map(ThemeService.AVAILABLE_THEMES, 'key'), theme)) {
            this.store.dispatch(UserActions.changeTheme(theme));
        }
    }

    saveTheme(theme: string) {
        this.makeRequest({
            method: BaseService.PUT,
            url: `client/${UserService.userId}`,
            body: {
                theme: theme
            }
        });
    }
}
