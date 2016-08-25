import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore, ILoginState, UserActions, LoginActions } from 'reactive';
import { UserService } from 'services';

@Injectable()
export class AppEntryGuard implements CanActivate {

    constructor(private router: Router, private store: Store<IAppStore>, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let loginStore = (<Observable<ILoginState>>this.store.select('login'));

        let unauthorized = () => {
            this.router.navigateByUrl('');
            return Observable.of(false);
        };

        return loginStore.take(1).map(data => data).switchMap(data => {
            /**
             * Three scenarios to consider:
             * 1) The user just logged into our app - they should have a status of `loggedIn` and our UserEffects
             * should have handled the request to the server to get the client data (whenever there is a
             * `LOG_IN_SUCCESS`, our Effects automatically do some things). A side-effect of updating the user
             * state with their server-side information is that we set their ID in session storage (handled in
             * UserEffects).
             */
            if (data.loggedIn) {
                return Observable.of(true);
            }

            /**
             * 2) The user has not logged in or refreshed the page and is trying to access a route behind this
             * guard - force them back to the login screen. They will not have a user ID in their session storage
             * if they haven't logged in.
             */
            if (!UserService.userId) {
                return unauthorized();
            }

            /**
             * 3) The user has refreshed the page - this means they were already logged in and they have their
             * userId in session storage. In this case, the `loggedIn` state is false because they didn't just
             * log in, so we need to go fetch their client data from the server manually.
             */
            return this.userService.getClient().mergeMap(user => {
                this.store.dispatch(UserActions.update(user));
                this.store.dispatch(LoginActions.pageRefresh());
                return Observable.of(true);
            }).catch(() => {
                return unauthorized();
            });
        });
    }
}
