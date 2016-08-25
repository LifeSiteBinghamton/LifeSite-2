import { Input } from '@angular/core';

import { RouteComponent } from 'frameworks';
import { SubscriptionModel, PlanModel } from 'models';

@RouteComponent({
    moduleId: module.id,
    selector: 'payment-details',
    templateUrl: 'payment-details.html',
    styleUrls: ['../../../styles/lifesite/widget.css']
})
export class PaymentDetails {
    @Input() subscription: SubscriptionModel;
    @Input() plan: PlanModel;
}
