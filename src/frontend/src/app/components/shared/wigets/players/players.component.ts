import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styles: []
})
export class PlayersComponent implements OnInit {

  constructor(
    public http: HttpService
  ) {
      this.load_players();
  }

  ngOnInit() {}

  load_players() {
    this.http.get_players().catch();
  }

}
