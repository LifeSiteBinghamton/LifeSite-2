export * from './base.service';
export * from './cache.service';
export * from './chargebee.service';
export * from './cookies.service';
export * from './login.service';
export * from './user.service';
export * from './registration.service';

import { LoginService } from './login.service';
import { UserService } from './user.service';
import { RegistrationService } from './registration.service';
import { ChargebeeService } from './chargebee.service';

export const SERVICE_PROVIDERS = [
    LoginService,
    RegistrationService,
    UserService,
    ChargebeeService
];
