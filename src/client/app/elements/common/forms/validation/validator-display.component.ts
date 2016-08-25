import { Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { BaseComponent } from 'frameworks';
import { ValidatorStyle } from './validation.interface';

@BaseComponent({
    moduleId: module.id,
    selector: 'validator-display',
    template: `
        <div [hidden]="isHidden" class="validator" [ngClass]="classes">
            <span>{{message}}</span>
            <i class="warning icon"></i>
        </div>
    `,
    styleUrls: ['validator-display.css'],
    directives: [NgClass]
})
export class ValidatorDisplay {
    @Input() style: ValidatorStyle = ValidatorStyle.Popover;
    @Input() isHidden: boolean;
    @Input() message: string;

    get classes() {
        return this.style === ValidatorStyle.Popover
            ? 'advanced ui top pointing red basic label' : 'simple';
    }
}
