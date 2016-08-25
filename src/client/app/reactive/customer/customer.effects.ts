/* tslint:disable */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { IAppStore, UserActions } from '../index';
import { CustomerActions } from './customer.actions';
import { ChargebeeService } from 'services';

@Injectable()
export class CustomerEffects {
    constructor(private updates$: StateUpdates<IAppStore>,
                private store: Store<IAppStore>,
                private chargebeeService: ChargebeeService) {}

    @Effect() loadPlans$ = this.updates$
        .whenAction(CustomerActions.PLAN_LOAD)
        .switchMap(() => this.chargebeeService.getPlans()
            .map(plans => CustomerActions.planLoadSuccess(plans))
            .catch(error => Observable.of(CustomerActions.planLoadFail(error)))
        );
}
/* tslint:enable */
