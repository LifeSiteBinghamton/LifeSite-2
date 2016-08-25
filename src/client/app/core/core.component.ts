import { ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

import { RouteComponent } from 'frameworks';

let PROD_CONFIG = {
    moduleId: module.id,
    selector: 'core',
    template: `<router-outlet></router-outlet>`,
    styleUrls: ['../../styles/app.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default
};

let DEV_CONFIG = Object.assign({}, PROD_CONFIG, {
    template: `<router-outlet></router-outlet><ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>`,
    directives: [StoreLogMonitorComponent]
});

@RouteComponent(('<%= ENV %>' === 'dev') ? DEV_CONFIG : PROD_CONFIG)
export class Core {
    constructor() {
        console.log(`Running LifeSite: ${'<%= ENV %>'}`);
    }
}
