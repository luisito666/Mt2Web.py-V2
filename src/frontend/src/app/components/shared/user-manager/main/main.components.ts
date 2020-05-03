import { Component, OnInit } from '@angular/core';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

// interfaces
import { UserLogin } from 'src/app/interfaces/user.simple';


@Component({
  selector: 'main-manager',
  templateUrl: './main.components.html',
  styles: []
})
export class MainManagerComponent implements OnInit {

  user: UserLogin;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('user').subscribe(({user}) => {
      this.user = user;
    })
  }

}