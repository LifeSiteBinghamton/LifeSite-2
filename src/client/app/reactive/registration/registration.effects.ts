import { Injectable } from '@angular/core';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { IAppStore, ActivationActions } from '../index';
import { RegistrationActions } from './registration.actions';
import { RegistrationService } from 'services';

type ValidateType = {token: string, id: string};

@Injectable()
export class RegistrationEffects {
    constructor(private updates$: StateUpdates<IAppStore>, private registrationService: RegistrationService) {}

    @Effect() registration$ = this.updates$
        .whenAction(RegistrationActions.REGISTER)
        .map<string>(toPayload)
        .switchMap(email => this.registrationService.register(email)
            .map((data) => RegistrationActions.success(data.token, data.id))
            .catch((error) => Observable.of(RegistrationActions.failure(error.json().error)))
        );

    @Effect() activation$ = this.updates$
        .whenAction(ActivationActions.ACTIVATE)
        .map((data) => {
            return {
                password: data.action.payload,
                token: data.state.activation.token,
                id: data.state.activation.id,
            };
        })
        .switchMap(data => this.registrationService.activate(data.id, data.token, data.password)
            .map(() => ActivationActions.success())
            .catch((error) => Observable.of(ActivationActions.failure(error.json().error)))
        );

}

