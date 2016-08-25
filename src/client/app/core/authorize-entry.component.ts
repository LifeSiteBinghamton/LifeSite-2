import { ChangeDetectionStrategy } from '@angular/core';

import { RouteComponent } from 'frameworks';

@RouteComponent({
    moduleId: module.id,
    selector: 'authorize-entry',
    template: `
        <div class="container">
            <div class="left"></div>
            <div class="right">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ['authorize-entry.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AuthorizeEntry {}
