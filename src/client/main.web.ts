// angular
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

// app
import {
    Config,
    WindowService,
    ConsoleService,
    AppConfigService,
    MultilingualService,
    ThemeService,
    FRAMEWORK_PROVIDERS
} from 'frameworks';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
Config.DEBUG.LEVEL_4 = true;
MultilingualService.SUPPORTED_LANGUAGES = AppConfigService.SUPPORTED_LANGUAGES;
ThemeService.AVAILABLE_THEMES = AppConfigService.AVAILABLE_THEMES;

import { Core } from 'core';
import { LIFESITE_PROVIDERS } from './app/lifesite.index';

// depending on environments, you could push in different providers as needed
const ENV_PROVIDERS: Array<any> = [];

// example of how to use build variables to determine environment
if ('<%= ENV %>' === 'prod' || '<%= TARGET_DESKTOP_BUILD %>' === 'true') {
    enableProdMode();
}

let BOOTSTRAP_PROVIDERS: any[] = [
    disableDeprecatedForms(),
    provideForms(),

    ENV_PROVIDERS,
    FRAMEWORK_PROVIDERS,
    LIFESITE_PROVIDERS,

    {provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>'},
    {provide: WindowService, useValue: window},
    {provide: ConsoleService, useValue: console},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

bootstrap(Core, BOOTSTRAP_PROVIDERS)
    .catch((err: any) => console.error(err));

// In order to start the Service Worker located at "./worker.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
//       console.log('ServiceWorker registration successful with scope: ', registration.scope))
//     .catch((err: any) =>
//       console.log('ServiceWorker registration failed: ', err));
// }
