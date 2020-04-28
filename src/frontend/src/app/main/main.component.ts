import { Component, OnInit } from '@angular/core';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { AddToken } from '../store/actions';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    if(localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      this.store.dispatch(AddToken({token: token}))
    }
  }
}
