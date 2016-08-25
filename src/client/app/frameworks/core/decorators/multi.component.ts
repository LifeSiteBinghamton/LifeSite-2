import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DecoratorUtils } from './utils';

export function MultiComponent(metadata: any = {}) {
    return function (cls: any) {
        return DecoratorUtils.annotateComponent(cls, metadata, {
            directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
        });
    };
}

