import { ChangeDetectionStrategy } from '@angular/core';

import { LsFooter, LsHeader, LsNav } from 'elements';
import { RouteComponent, LsThemeDirective } from 'frameworks';

@RouteComponent({
    moduleId: module.id,
    selector: 'app-entry',
    template: `
        <div lsTheme>
            <ls-header></ls-header>
            <div class="wrapper">
                <div class="nav-wrapper">
                    <ls-nav></ls-nav>
                </div>
                <router-outlet></router-outlet>
            </div>
            <!--<ls-file-progress></ls-file-progress>-->
            <ls-footer></ls-footer>
        </div>
    `,
    styleUrls: ['app-entry.css'],
    directives: [LsFooter, LsHeader, LsNav, LsThemeDirective],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppEntry {}
