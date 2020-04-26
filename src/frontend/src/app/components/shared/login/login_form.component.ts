import { Component, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Servicios
import { LoginService } from 'src/app/services/login.service';

// Interfaces
import { User } from 'src/app/interfaces/user.simple';

//Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { HiddenLoginModal } from 'src/app/store/actions';

@Component({
    selector: 'loginForm',
    templateUrl: './login_form.component.html',
    styles: [],
    // host: {
    //     '(document:click)': 'onClick($event)',
    // }
})
export class LoginFormComponent {

    modal: boolean;
    message: string;
    user: User = {
        login: null,
        password: null
    };
    loginForm: FormGroup;

    constructor(
        private login: LoginService,
        private store: Store<AppState>,
        private _eref: ElementRef
    ) {
        this.loginForm = new FormGroup({
            login : new FormControl('', [
              Validators.required,
              Validators.minLength(4)
            ]),
            password: new FormControl('', [
              Validators.required,
              Validators.minLength(4)
            ])
          });
          this.loginForm.reset(this.user);
    }

    // onClick(event) {
    //     if (event.target.className === 'sign_in') {
    //         return
    //     }
    //     if (!this._eref.nativeElement.contains(event.target)) {
    //         this.store.dispatch(HiddenLoginModal({hidden: true}))
    //     }
    // }

    send() {
        this.login.login( this.loginForm.value ).subscribe(
          ({token}) => {
              localStorage.setItem('token', token);          
              this.loginForm.reset(this.user);
          },
          err => {
              console.log(err);
              this.message = 'Nombre de usuario o contraseña incorrecta';
              setTimeout(() => {
                this.message = '';
              }, 3000);
          }
        );
    }
}

