import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { IAppStore, WizardActions, UserActions } from 'reactive';
import { UserService } from 'services';
import { UserModel } from 'models';

@Injectable()
export class OnboardingEffects {
    constructor(private update$: StateUpdates<IAppStore>, private userService: UserService) {}

    @Effect() onboardingLoad$ = this.update$
        .whenAction(WizardActions.INIT)
        .map(store => store.state.user)
        .map((user: UserModel) => {
            const {first_name, last_name} = user;
            return WizardActions.loaded({first_name, last_name});
        });

    @Effect() onboardingCompleted$ = this.update$
        .whenAction(WizardActions.COMPLETE)
        .map(store => store.state.wizard.dataToSendToServer)
        .filter(data => data !== null)
        .switchMap(data => this.userService.saveClient(data)
            .map((user: UserModel) => UserActions.update(user))
            .catch(error => Observable.of(error))
        );

}
