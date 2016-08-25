import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import 'rxjs/Rx';

import { routes, AppEntryGuard } from 'core';
import { ActivationGuard } from 'pages';
import { NGRX_EFFECTS, NGRX_REDUCERS } from 'reactive';
import { SERVICE_PROVIDERS } from 'services';

let config = [
    provideRouter(routes),
    provideStore(NGRX_REDUCERS),
    runEffects(NGRX_EFFECTS),
    ActivationGuard,
    AppEntryGuard,
    SERVICE_PROVIDERS
];

if ('<%= ENV %>' === 'dev') {
    config.push(
        instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: 'right'
            })
        })
    );
}

export const LIFESITE_PROVIDERS = config;
