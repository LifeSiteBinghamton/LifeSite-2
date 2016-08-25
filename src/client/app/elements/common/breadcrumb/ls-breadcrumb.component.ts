import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RouteComponent } from 'frameworks';

interface ABreadcrumb {
    url: string;
    name: string;
    parents?: ABreadcrumb[];
}

@RouteComponent({
    moduleId: module.id,
    selector: 'ls-breadcrumb',
    templateUrl: 'ls-breadcrumb.html',
    styleUrls: ['breadcrumb.css']
})
export class LsBreadcrumb implements OnInit {
    // todo - language

    private breadcrumbs: ABreadcrumb[] = [];

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        let data = this.route.snapshot.data;
        let parents: ABreadcrumb[] = data['parents'];

        // Each parent route
        if (parents) {
            parents.forEach((parent) => {
                this.breadcrumbs.push(parent);
            });
        }
        // Current route
        this.breadcrumbs.push({
            url: this.router.url,
            name: data['name']
        });
    }
}
