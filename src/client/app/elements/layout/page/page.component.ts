import { BaseComponent } from 'frameworks';
import { LsToolbar, LsBreadcrumb } from '../../common/index';

@BaseComponent({
    moduleId: module.id,
    selector: 'page',
    templateUrl: 'page.html',
    styleUrls: ['page.css'],
    directives: [LsToolbar, LsBreadcrumb]
})
export class Page {}
