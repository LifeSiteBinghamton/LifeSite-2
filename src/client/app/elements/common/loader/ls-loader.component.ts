import { Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { NgClass } from '@angular/common';

import { BaseComponent } from 'frameworks';

@BaseComponent({
    moduleId: module.id,
    selector: 'ls-loader',
    template: `
        <div class="ls-loader ui inverted dimmer" [ngClass]="{'active': isLoading, 'ls-loader--cell': type === 'cell'}">
            <template [ngIf]="text">
                <div class="ui text loader">{{text}}</div>
            </template>
            <template [ngIf]="!text">
                <div class="ui loader"></div>
            </template>
        </div>
    `,
    styles: [`
        .ls-loader {
            background-color: rgba(255, 255, 255, .95) !important;
        }

        .ls-loader--cell {
            z-index: 1 !important;
        }
    `],
    directives: [NgClass]
})
export class LsLoader implements OnChanges {
    @Input() isLoading: boolean = false;
    @Input() delay: number;
    @Input() text: string;
    @Input() type: string = 'page';

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnChanges(changes: SimpleChanges) {
        if (
            // Don't apply any delay if a value was never set.
            (changes['isLoading'].previousValue === null) ||
            // Don't apply a delay if the value isn't even set or if the isLoading value was just set to true.
            (!this.delay || this.isLoading === true)
        ) {
            return;
        }

        this.isLoading = true;

        setTimeout(() => {
            this.isLoading = false;
            this.cdr.markForCheck();
        }, this.delay);
    }
}
