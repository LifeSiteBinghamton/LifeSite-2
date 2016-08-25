// libs
import { TranslateService, TranslateLoader } from 'ng2-translate/ng2-translate';

// app
import { MultilingualService } from '../index';

// mocks
import { TranslateMock } from './mocks/ng2-translate.mock';
import { TranslateLoaderMock } from './mocks/ng2-translate-loader.mock';

export function TEST_MULTILINGUAL_PROVIDERS(): any[] {
    return [
        {provide: TranslateLoader, useClass: TranslateLoaderMock},
        {provide: TranslateService, useClass: TranslateMock},
        MultilingualService
    ];
}

export function TEST_MULTILINGUAL_RESET(): void {
    // ensure static is reset
    MultilingualService.SUPPORTED_LANGUAGES = [
        {code: 'en', title: 'English'}
    ];
}
