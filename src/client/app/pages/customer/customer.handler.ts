import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { PlanModel, SubscriptionModel } from 'models';
import { IAppStore, IPlansState, IUserState, CustomerActions } from 'reactive';

/**
 * All `XHandler` classes should remove any `store` functionality outside the component.
 */
@Injectable()
export class CustomerHandler {
    public loadingPlans$: Observable<boolean>;
    public subscription$: Observable<SubscriptionModel>;
    public selectedPlan$: Observable<PlanModel>;
    public plans$: Observable<PlanModel[]>;

    constructor(private store: Store<IAppStore>) {
        const plan$: Observable<IPlansState> = <Observable<IPlansState>>store.select('plan').share();
        const user$: Observable<IUserState> = <Observable<IUserState>>store.select('user').share();

        this.loadingPlans$ = plan$.map(data => data.loading);
        this.selectedPlan$ = Observable.combineLatest(plan$, user$).map(([planState, userState]) => {
            return planState.plans.find((plan: PlanModel) => {
                return userState.selectedPlanId === plan.id;
            });
        });
        this.subscription$ = user$.map(data => data.subscription);
        this.plans$ = plan$.map(data => data.plans);
    }

    loadPlans() {
        this.store.dispatch(CustomerActions.planLoad());
    }
}

