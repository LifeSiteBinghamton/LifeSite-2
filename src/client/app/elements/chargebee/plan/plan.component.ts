import { Input } from '@angular/core';

import { PlanModel } from 'models';
import { RouteComponent } from 'frameworks';

@RouteComponent({
    moduleId: module.id,
    selector: 'plan',
    templateUrl: 'plan.html'
})
export class Plan {
    @Input() plans: PlanModel[];
    @Input() selectedPlan: PlanModel;
}
