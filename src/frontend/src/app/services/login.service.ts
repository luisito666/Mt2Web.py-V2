import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Servicio
import { HttpService } from './http/http.service';

// Interfaces
import { User } from '../interfaces/user.simple';


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
        return (localStorage.getItem('token') !== null);
    }

}
