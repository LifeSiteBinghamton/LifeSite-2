import {
    Input,
    ContentChildren,
    QueryList,
    SimpleChanges,
    ViewEncapsulation,
    OnInit,
    AfterContentInit,
    OnChanges
} from '@angular/core';
import { NgClass } from '@angular/common';

import { BaseComponent } from 'frameworks';
import { LsLoader } from 'elements';
import { WizardStep } from './wizard-step.component';

export enum WizardStyle {
    Reveal,
    Slide
}

@BaseComponent({
    moduleId: module.id,
    selector: 'wizard',
    template: `
        <div class="wizard" [ngClass]="{'wizard--slide-out': computedStyle === 'Slide', 
                                        'wizard--reveal': computedStyle === 'Reveal'}">
            <ls-loader [isLoading]="loading" [delay]="delay"></ls-loader>
            <div class="wizard__title">
                <ng-content select="wizard-title"></ng-content>
            </div>
            <ng-content></ng-content>
            <div class="wizard__footer">
                <ng-content select="wizard-footer"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['wizard.css'],
    directives: [LsLoader, NgClass],
    encapsulation: ViewEncapsulation.None
})
export class Wizard implements OnInit, AfterContentInit, OnChanges {
    @Input() loading: boolean;
    @Input() delay: number = undefined;
    @Input() currentStep: number;
    @Input() wizardStyle: WizardStyle = WizardStyle.Slide;
    @ContentChildren(WizardStep) private steps: QueryList<WizardStep>;

    private computedStyle;

    ngOnInit() {
        this.computedStyle = this.wizardStyle === WizardStyle.Slide ? 'Slide' : 'Reveal';
    }

    ngAfterContentInit() {
        this.setActive();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes['currentStep'] || changes['currentStep'].isFirstChange()) {
            return;
        }

        this.currentStep = changes['currentStep'].currentValue;
        this.setActive();
    }

    private setActive() {
        this.steps.forEach((step) => step._active = false);
        this.steps.toArray()[this.currentStep]._active = true;
    }
}
