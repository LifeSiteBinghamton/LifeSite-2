import { Router } from '@angular/router';

import { LsLoader, LsPassword } from 'elements';
import { BaseComponent } from 'frameworks';
import { ActivateHandler } from './activate.handler';

@BaseComponent({
    moduleId: module.id,
    selector: 'activate',
    templateUrl: 'activate.html',
    styleUrls: ['registration.css'],
    directives: [LsLoader, LsPassword],
    providers: [ActivateHandler]
})
export class Activate {
    constructor(private handler: ActivateHandler, private router: Router) {}

    onSubmit(formValue: {password: string}) {
        this.handler.activate(formValue.password);
    }

    goToLogin() {
        this.router.navigateByUrl('');
    }

}
