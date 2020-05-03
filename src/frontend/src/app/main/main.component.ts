import { Component, OnInit } from '@angular/core';

// Title
import { Title } from '@angular/platform-browser';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { AddToken } from '../store/actions';
// Services
import { LoginService } from '../services/login.service';

// Environments
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  serverName: string;
  serverInfo: string

  constructor(
    private store: Store<AppState>,
    private auth: LoginService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle(environment.serverName);
    if(localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      // Token is valid?
      if (this.auth.isAuthenticated()){
        this.store.dispatch(AddToken({token: token}))
      }
    }
  }
}
