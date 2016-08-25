import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
import { UserModel, AccessTokenModel } from 'models';

@Injectable()
export class UserService extends BaseService {
    constructor(http: Http) {
        super(http);
    }

    public getClient(accessToken?: AccessTokenModel): Observable<UserModel> {
        return this.makeRequest({
            method: BaseService.GET,
            url: `client/${accessToken ? accessToken.userId : UserService.userId}`
        }).map(res => res.json());
    }

    public saveClient(data): Observable<UserModel> {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `client/${UserService.userId}`,
            body: data
        }).map(res => res.json());
    }

    /**
     * Makes a PUT request to the server so the user can change their password
     *
     * @param {string} password The user's old password value
     * @param {string} newPassword The user's new password value
     */
    changePassword(password, newPassword): Observable<Response> {
        return this.makeRequest({
            method: BaseService.PUT,
            url: `client/${UserService.userId}/password`,
            body: {
                password: password,
                newPassword: newPassword
            }
        });
    }

    deleteClient(): Observable<Response> {
        console.log(UserService.userId);
        return this.makeRequest({
            method: BaseService.DELETE,
            url: `client/${UserService.userId}`
        }).map(res => res.json());
    }

    static get userId() {
        return sessionStorage.getItem('userId');
    }
}
