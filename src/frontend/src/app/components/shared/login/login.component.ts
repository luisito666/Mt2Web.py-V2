import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Servicios
import { LoginService } from 'src/app/services/login.service';

// Interfaces
import { User } from 'src/app/interfaces/user.simple';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('Menu', {static: true}) DivMenu: ElementRef;
  message: string;
  user: User = {
    login: null,
    password: null
  };
  loginForm: FormGroup;

  constructor(
    private login: LoginService,
    private renderer: Renderer2
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

  ngOnInit() {
  }

  send() {
    this.login.login( this.loginForm.value ).subscribe(
      (success: any) => {
          localStorage.setItem('token', success.token);
          this.DivMenu.nativeElement.style.display = 'none';
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
    // console.log(this.loginForm.value);
  }


}
