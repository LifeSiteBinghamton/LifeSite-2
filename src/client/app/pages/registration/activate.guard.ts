import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RegistrationService } from 'services';
import { IAppStore, ActivationActions } from 'reactive';

@Injectable()
export class ActivationGuard implements CanActivate {

    constructor(private router: Router, private service: RegistrationService, private store: Store<IAppStore>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
        // Destructuring route params to token and id.
        const {token, id} = route.params;
        // Hit the API to see if this is a valid user
        return this.service.validateUser(token, id)
            // If it's a valid user, set the current Activation state
            .map(() => ActivationActions.validated(token, id))
            // Dispatch the `action` that we got from the above line (VALIDATED)
            .do(action => this.store.dispatch(action))
            // Return an Observable of true to angular's `canActivate`
            .switchMap(() => {
                return Observable.of(true);
            })
            // If we catch an error, dispatch FAILURE, navigate to invalid, and return false
            .catch((error) => {
                this.store.dispatch(ActivationActions.failure(error));
                this.router.navigate(['../invalid']);
                return Observable.of(false);
            });
    }
}
