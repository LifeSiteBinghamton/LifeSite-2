export interface INavItem {
    icon: string;
    href: string;
    name: string;
}

export const NAVIGATION: INavItem[] = [
    {
        icon: 'fa-tachometer',
        href: '/app/dashboard',
        name: 'Dashboard'
    }
];
