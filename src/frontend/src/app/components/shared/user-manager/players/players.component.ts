import { Component, OnInit } from '@angular/core';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Player } from 'src/app/interfaces';

@Component({
  selector: 'manager-player-list',
  templateUrl: 'players.component.html',
  styles: []
})
export class PlayersListComponent implements OnInit {

  players: Player[] = []

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('user').subscribe(({players}) => {
      this.players = players;
    })
  }

}
