import { Directive, HostBinding } from '@angular/core';

import { ThemeService } from './theme.service';

@Directive({
    selector: '[lsTheme]',
    providers: [ThemeService]
})
export class LsThemeDirective {
    @HostBinding('class') _class: string;

    constructor(private themeService: ThemeService) {
        this.themeService.currentTheme$.subscribe((theme) => {
            this._class = `${theme}`;
        });
    }
}
