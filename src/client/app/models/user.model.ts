import { CustomerModel } from './customer.model';
import { SubscriptionModel } from './subscription.model';

export interface UserModel {
    first_name: string;
    last_name: string;
    email: string;
    id: string;
    two_factor_enabled: boolean;
    customer: CustomerModel;
    subscription?: SubscriptionModel;
    selectedTheme?: string;
}

export interface PublicUserModel {
    email: string;
    password: string;
}

export interface AccessTokenModel {
    id: string;
    ttl: number;
    created: string;
    userId: string;
    customerId: string;
}
