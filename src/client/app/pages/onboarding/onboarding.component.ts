import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { FormComponent, LsThemeDirective } from 'frameworks';
import { WizardHandler, OnboardingEffects } from 'reactive';
import {
    Wizard,
    WizardStep,
    LsDynamicForm,
    FormEvent,
    LsSimpleHeader,
    LsFooter,
    IFormConfiguration
} from 'elements';
import { WizardStyle } from 'models';
import { ONBOARDING_CONFIG as config } from './onboarding.config';

@FormComponent({
    moduleId: module.id,
    selector: 'onboarding',
    templateUrl: 'onboarding.html',
    styleUrls: ['onboarding.css'],
    directives: [Wizard, WizardStep, LsDynamicForm, LsThemeDirective, LsSimpleHeader, LsFooter],
    providers: [WizardHandler, OnboardingEffects]
})
export class Onboarding implements OnInit, OnDestroy {
    private currentStep: number = 0;
    private subscriptions: Subscription[];

    config: IFormConfiguration[] = config;
    models = {
        first_name: '',
        last_name: ''
    };

    constructor(private router: Router,
                private handler: WizardHandler,
                onboardingEffects: OnboardingEffects) {
        this.subscriptions = this.handler.setEffects(
            onboardingEffects.onboardingLoad$, onboardingEffects.onboardingCompleted$
        );

        this.handler.currentStep$.subscribe(index => {
            this.currentStep = index;
        });

        this.handler.isCompleted$.subscribe(() => {
            this.router.navigateByUrl('/app/dashboard');
        });
    }

    ngOnInit() {
        this.handler.init({
            steps: [
                {fields: [config[0].fields[0].config.key], index: 0},
                {fields: [config[1].fields[0].config.key], index: 1}
            ],
            name: 'Onboarding',
            style: WizardStyle.Reveal
        });
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    onSubmit(event: FormEvent) {
        const {first_name, last_name} = event.value;
        this.models.first_name = first_name;
        this.models.last_name = last_name;

        this.handler.next(this.models);
    }
}
