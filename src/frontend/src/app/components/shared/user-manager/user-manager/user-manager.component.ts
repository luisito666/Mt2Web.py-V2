import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { HiddenProfileModal, DeleteToken, DeleteUser } from 'src/app/store/actions';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styles: []
})

export class UserManagerComponent implements OnInit {

  index_menu: any;
  modal: boolean

  constructor(
    private store: Store<AppState>,
    public login: LoginService
  ) { }

  ngOnInit() {
    this.index_menu = {
        "main-manager": true,
        "manager-player-list": false,
        "manager-passwd": false,
        "manager-donations": false,
    }
    this.store.select('ui').subscribe( ({modal_profile}) => {
      this.modal = modal_profile;
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
        this.index_menu['main-manager'] = true;
        this.index_menu['manager-player-list'] = false;
        this.index_menu['manager-passwd'] = false;
        this.index_menu['manager-donations'] = false;
        break
      case '2':
        this.index_menu['main-manager'] = false;
        this.index_menu['manager-player-list'] = true;
        this.index_menu['manager-passwd'] = false;
        this.index_menu['manager-donations'] = false;
        break
      case '3':
        this.index_menu['main-manager'] = false;
        this.index_menu['manager-player-list'] = false;
        this.index_menu['manager-passwd'] = true;
        this.index_menu['manager-donations'] = false;
        break
      case '4':
        this.index_menu['main-manager'] = false;
        this.index_menu['manager-player-list'] = false;
        this.index_menu['manager-passwd'] = false;
        this.index_menu['manager-donations'] = true;
        break
    }
  }

}
