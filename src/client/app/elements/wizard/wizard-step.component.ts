import { ChangeDetectorRef } from '@angular/core';

import { BaseComponent } from 'frameworks';

@BaseComponent({
    moduleId: module.id,
    selector: 'wizard-step',
    template: `
        <div class="wizard__step" [class.active]="active" [class.prior-active]="priorActive">
            <div class="wizard__step-title">
                <ng-content select="wizard-step-title"></ng-content>
            </div>
            <div class="wizard__step-content">
                <ng-content select="wizard-step-content"></ng-content>
            </div>
            <div class="wizard__step-footer">
                <ng-content select="wizard-step-footer"></ng-content>
            </div>
        </div>
    `
})
export class WizardStep {
    private active: boolean = false;
    private priorActive: boolean = false;

    constructor(private cdr: ChangeDetectorRef) {}

    set _active(active: boolean) {
        if (this.active === true && active === false) {
            this.priorActive = true;
        }
        this.active = active;
        this.cdr.markForCheck();
    }
}
