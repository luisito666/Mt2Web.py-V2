import { Injectable } from '@angular/core';

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

    public login(user_data: User) {
        return this.http.login(user_data);
    }

    public logout() {
        localStorage.removeItem('token');
    }

    public isAuthenticated() {
        return (localStorage.getItem('token') !== null);
    }

}
