import { Component, OnInit } from '@angular/core';

// Service
import { HttpService } from '../../../../services/http/http.service';

// Interfaces
import {DjangoResponse} from '../../../../interfaces/http.response'

@Component({
  selector: 'ListPlayer',
  templateUrl: './list-player.component.html',
  styles: []
})
export class ListPlayersComponent implements OnInit {

  players: any[] = []
  positions_class = ['fisrt_position', 'second_position', 'threeth_position', 'fourth_position', 'fith_position']

  constructor(
    private http: HttpService
  ) {
      this.load_players();
  }

  ngOnInit() {}

  load_players() {
    this.http.get_players().subscribe(({results}: DjangoResponse) => {
      this.players = results.slice(0,5)
    })
  }

}
