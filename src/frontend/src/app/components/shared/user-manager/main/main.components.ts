import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/services.module';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { AddUser } from 'src/app/store/actions';

// Interface
import { UserLogin } from 'src/app/interfaces/user.simple';


@Component({
  selector: 'main-manager',
  templateUrl: './main.components.html',
  styles: []
})
export class MainManagerComponent implements OnInit {

  constructor(
    private authenticate: AuthenticateService,
    private login: LoginService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('user').subscribe( ({token}) => {
      if (token) {}
    })   
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
