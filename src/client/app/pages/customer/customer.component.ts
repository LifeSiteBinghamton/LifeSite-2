import { OnInit } from '@angular/core';

import { RouteComponent } from 'frameworks';
import { LsLoader, Page, Plan } from 'elements';
import { PaymentDetails } from './payment-details.component';
import { CustomerHandler } from './customer.handler';

@RouteComponent({
    moduleId: module.id,
    selector: 'customer',
    templateUrl: 'customer.html',
    styleUrls: ['../../../styles/lifesite/widget.css'],
    directives: [LsLoader, Page, Plan, PaymentDetails],
    providers: [CustomerHandler]
})
export class Customer implements OnInit {
    constructor(private handler: CustomerHandler) {}

    ngOnInit() {
        this.handler.loadPlans();
    }
}
