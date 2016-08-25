import { trigger, state, style, transition, animate } from '@angular/core';

import { RouteComponent } from 'frameworks';
import { NAVIGATION, INavItem } from './nav.interface';

@RouteComponent({
    moduleId: module.id,
    selector: 'ls-nav',
    templateUrl: './ls-nav.html',
    styleUrls: ['./nav.css'],
    animations: [
        trigger('menuState', [
            state('expanded', style({
                width: '200px'
            })),
            state('unexpanded', style({
                width: '50px'
            })),
            transition('expanded <=> unexpanded', animate('100ms ease'))
        ])
    ]
})
export class LsNav {
    navItems: INavItem[] = NAVIGATION;
    private state: string = 'unexpanded';

    toggleMenu() {
        this.state = (this.state === 'expanded') ? 'unexpanded' : 'expanded';
    }
}
