// app
import { ILang } from '../../core/index';
import { ITheme } from '../../theming/index';

export class AppConfigService {

    public static SUPPORTED_LANGUAGES: Array<ILang> = [
        {code: 'en', title: 'English'},
        {code: 'es', title: 'Spanish'},
        {code: 'ko', title: 'Korean'}
    ];

    public static AVAILABLE_THEMES: ITheme[] = [
        {key: 'lifesite-default-theme', name: 'LifeSite Default Theme'},
        {key: 'lifesite-joe-mama-theme', name: 'LifeSite Joe Mama'}
    ];

}
