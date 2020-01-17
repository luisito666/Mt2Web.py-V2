import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/services.module';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-manager',
  template: `
  Información
  `,
  styles: []
})
export class MainManagerComponent implements OnInit {

  constructor(
    private authenticate: AuthenticateService,
    private login: LoginService
  ) { }

  ngOnInit() {
    this.authenticate.get_current_user()
            .subscribe( res => console.log(res));
    /* const session = this.haveSession()
      .subscribe( (response: any) => {
        console.log(response);
        if (response.authenticated) {
          this.authenticate.get_current_user()
            .subscribe( res => console.log(res));
          session.unsubscribe();
        }
      }); */
  }

  haveSession(): Observable <any> {
    const observeable = new Observable((observer) => {
      setInterval( () => {

        if (this.login.isAuthenticated()) {
          observer.next({authenticated: true});
        }

      }, 2000);
    });
    return observeable;
  }

}
