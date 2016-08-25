import { RouterConfig } from '@angular/router';

import { AppEntryGuard } from 'core';
import { Login, Register, Activate, ActivationGuard, Invalid, Onboarding, Dashboard, Customer } from 'pages';
import { AuthorizeEntry } from './authorize-entry.component';
import { AppEntry } from './app-entry.component';

export const routes: RouterConfig = [
    {
        path: '',
        component: AuthorizeEntry,
        children: [
            {path: '', component: Login},
            {path: 'register', component: Register}
        ]
    },
    {
        path: 'register/:id/:token',
        component: Activate,
        canActivate: [ActivationGuard]
    },
    {
        path: 'invalid',
        component: Invalid
    },
    {
        path: 'onboarding',
        component: Onboarding,
        canActivate: [AppEntryGuard]
    },
    {
        path: 'app',
        component: AppEntry,
        canActivate: [AppEntryGuard],
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'customer',
                component: Customer
            }
        ]
    }
];
