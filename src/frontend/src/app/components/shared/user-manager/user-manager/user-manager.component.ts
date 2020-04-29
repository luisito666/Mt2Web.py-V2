import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { 
  HiddenProfileModal, 
  DeleteToken, 
  DeleteUser, 
  TogleManagerMain,
  TogleManagerPlayer,
  TogleManagerPass,
  TogleManagerDonation
} from 'src/app/store/actions';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styles: []
})

export class UserManagerComponent implements OnInit {

  window_manager_main: boolean;
  window_manager_player: boolean;
  window_manager_passwd: boolean;
  window_manager_donations: boolean;
  modal: boolean

  constructor(
    private store: Store<AppState>,
    public login: LoginService
  ) { }

  ngOnInit() {
    this.store.select('ui').subscribe( ({
      modal_profile, 
      window_manager_main, 
      window_manager_player,
      window_manager_passwd,
      window_manager_donations
    }) => {
      this.modal = modal_profile;
      this.window_manager_main = window_manager_main;
      this.window_manager_player = window_manager_player;
      this.window_manager_passwd = window_manager_passwd;
      this.window_manager_donations = window_manager_donations;

    })
  }

  logout() {
    this.login.logout();
    this.store.dispatch(HiddenProfileModal({hidden: true}));
    this.store.dispatch(DeleteToken());
    this.store.dispatch(DeleteUser());
  }

  close_modal() {
    this.store.dispatch(HiddenProfileModal({hidden: true}))
  }

  show_menu(id: string) {
    switch(id){
      case '1':
        this.store.dispatch(TogleManagerMain({toggle: true}))
        break
      case '2':
        this.store.dispatch(TogleManagerPlayer({toggle: true}))
        break
      case '3':
        this.store.dispatch(TogleManagerPass({toggle: true}))
        break
      case '4':
        this.store.dispatch(TogleManagerDonation({toggle: true}))
        break
    }
  }

}
