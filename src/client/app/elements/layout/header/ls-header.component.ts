import { RouteComponent } from 'frameworks';
import { SearchComponent } from './search/search.component';
import { MobileMenuComponent } from '../mobilemenu/ls-mobilemenu.component';

@RouteComponent({
    moduleId: module.id,
    selector: 'ls-header',
    templateUrl: 'header.html',
    styleUrls: ['header.css'],
    directives: [SearchComponent, MobileMenuComponent]
})
export class LsHeader {
}
