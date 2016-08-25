export enum WizardStyle {
    Reveal,
    Slide
}

export interface WizardModel {
    steps: WizardStepModel[];
    style: WizardStyle;
    name?: string;
    options?: any;
}

export interface WizardStepModel {
    fields: string[];
    index: number;
    title?: string;
    options?: any;
}
