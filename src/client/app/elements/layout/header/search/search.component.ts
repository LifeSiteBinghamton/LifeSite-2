import { BaseComponent } from 'frameworks';

/**
 * @component SearchComponent
 * @description Allows the user to search JSON data tags and find a filtered set of results.  They can click on the
 * results to go to the corresponding section.
 *
 * Used this tutorial as a reference and altered it to suit our needs:
 * http://4dev.tech/2016/03/tutorial-creating-an-angular2-autocomplete/
 */
@BaseComponent({
    moduleId: module.id,
    selector: 'ls-search',
    templateUrl: 'search.html',
    styleUrls: ['search.css']
})
export class SearchComponent {}
