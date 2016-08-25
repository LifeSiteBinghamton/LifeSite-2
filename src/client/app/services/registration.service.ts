import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from './base.service';

/**
 * @injectable
 * @name RegistrationService
 * @description
 * Service which handles all requests pertaining to registration, user validation, and user activation.
 */
@Injectable()
export class RegistrationService extends BaseService {
    constructor(http: Http) {
        super(http);
    }

    register(email): Observable<{token: string, id: string}> {
        return this.makeRequest({
            method: BaseService.POST,
            url: 'client',
            body: {
                email: email
            }
        }).map(res => res.json());
    }

    validateUser(token, id) {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${id}/verify?verificationToken=${token}`
        }).map((res: Response) => {
            return res.json().email;
        });
    }

    // TODO See if they want confirm password or not
    // activate(id, token, password, passwordConfirm) {
    activate(id, token, password) {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `client/${id}/activate`,
            body: {
                verificationToken: token,
                password: password
                // passwordConfirm: passwordConfirm
            }
        });
    }
}
