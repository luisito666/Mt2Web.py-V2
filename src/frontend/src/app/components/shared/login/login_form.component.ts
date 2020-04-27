import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Servicios
import { LoginService } from 'src/app/services/login.service';

// Interfaces
import { User } from 'src/app/interfaces/user.simple';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { HiddenLoginModal, AddToken } from 'src/app/store/actions';


@Component({
    selector: 'loginForm',
    templateUrl: './login_form.component.html',
    styles: []
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
        private store: Store<AppState>
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

    send() {
        this.login.login( this.loginForm.value ).subscribe(
          ({token}) => {
              // Add token to store
              localStorage.setItem('token', token);
              // Add to redux state
              this.store.dispatch(AddToken({token: token}))
              // Clean Form
              this.loginForm.reset(this.user);
              // Close Modal
              this.store.dispatch(HiddenLoginModal({hidden: true}))
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

    close_modal() {
      this.store.dispatch(HiddenLoginModal(HiddenLoginModal({hidden: true})))
    }
}

