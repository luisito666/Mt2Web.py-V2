import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Servicio
import { HttpService } from './http/http.service';
import { JwtHelperService } from '@auth0/angular-jwt';

// Interfaces
import { User } from '../interfaces/user.simple';

const helper = new JwtHelperService();

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(
        private http: HttpService
    ) {}

    public login(UserData: User) {
        return this.http.login(UserData)
            .pipe(
                map((res: any) => {
                    return {
                        token: res.refresh
                    };
                })
            );
    }

    public logout() {
        localStorage.removeItem('token');
    }

    public isAuthenticated() {
       const token = localStorage.getItem('token');
       const isExpired = helper.isTokenExpired(token);
       return !isExpired;
    }

}
