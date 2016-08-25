import { BaseComponent } from 'frameworks';

import { UserService } from 'services';
import { UserModel } from 'models';
import { DashboardHandler } from './dashboard.handler';

/**
 * @component
 * @name Dashboard
 * @description
 * Component container for the dashboard which contains the user's widgets in draggable panels.
 */
@BaseComponent({
    moduleId: module.id,
    selector: 'dashboard',
    styleUrls: ['dashboard.css'],
    templateUrl: 'dashboard.html',
    providers: [DashboardHandler, UserService]
})
export class Dashboard {
    private user: UserModel;

    constructor(private handler: DashboardHandler, private userService: UserService) {
        this.handler.user$.subscribe((user) => {
            console.log(user);
            this.user = user;
        });
    }

    deleteClient() {
        console.log(UserService.userId);
        this.userService.deleteClient().subscribe(() => {
            /* do nothing */
        });
    }
}

