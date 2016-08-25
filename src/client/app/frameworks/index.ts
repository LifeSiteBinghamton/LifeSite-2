export * from './analytics/index';
export * from './app/index';
export * from './core/index';
export * from './electron/index';
export * from './i18n/index';
export * from './theming/index';

import { ANALYTICS_PROVIDERS } from './analytics/index';
import { MULTILINGUAL_PROVIDERS } from './i18n/index';
import { CORE_PROVIDERS } from './core/index';

export const FRAMEWORK_PROVIDERS = [
    ...ANALYTICS_PROVIDERS,
    ...MULTILINGUAL_PROVIDERS,
    ...CORE_PROVIDERS
];
