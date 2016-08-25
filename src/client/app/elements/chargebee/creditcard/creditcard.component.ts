import { Input } from '@angular/core';

import { RouteComponent } from 'frameworks';
import { CreditCardModel } from 'models';

@RouteComponent({
    moduleId: module.id,
    selector: 'credit-card',
    templateUrl: 'creditcard.html',
    styleUrls: ['creditcard.css']
})
export class CreditCard {
    @Input() creditCard: CreditCardModel;
}
