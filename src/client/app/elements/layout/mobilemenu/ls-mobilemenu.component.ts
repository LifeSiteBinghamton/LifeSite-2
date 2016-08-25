import { trigger, state, style, transition, animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BaseComponent } from 'frameworks';
import { SearchComponent } from '../header/search/search.component';

@BaseComponent({
    moduleId: module.id,
    selector: 'mobile-menu',
    templateUrl: 'ls-mobilemenu.html',
    styleUrls: ['mobilemenu.css'],
    directives: [ROUTER_DIRECTIVES, SearchComponent],
    animations: [
        trigger('menuState', [
            state('expanded', style({
                width: '400px'
            })),
            state('unexpanded', style({
                width: '0'
            })),
            transition('unexpanded => expanded', animate('100ms ease'))
        ])
    ]
})
export class MobileMenuComponent {

    private state: string = 'unexpanded';

    toggleMobileMenu() {
        this.state = (this.state === 'expanded') ? 'unexpanded' : 'expanded';
    }
}
