import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';


@Component({
  selector: 'app-guilds',
  template: `
  <button 
    class="btn_rankings_groups pointer" 
    id="btn_rankings_groups">
    
    <i class="fas fa-users"></i>
  </button>

  <div id="rankings_groups" class="rankings_groups">
    <aside class="rankings">
        <p class="tittle">
            Ranking de Gremios
        </p>
        <div *ngIf="http.guilds?.results[0]" class="fisrt_position text_position">
            <div class="position">
                1
            </div>
            <div class="war">
                {{ http.guilds?.results[0]?.name }}
            </div>
            <div class="level">
                {{ http.guilds?.results[0]?.level }}
            </div>
        </div>
        <div *ngIf="http.guilds?.results[1]" class="second_position text_position">
            <div class="position">
                2
            </div>
            <div class="war">
                {{ http.guilds?.results[1]?.name }}
            </div>
            <div class="level">
                {{ http.guilds?.results[1]?.level }}
            </div>
        </div>
        <div *ngIf="http.guilds?.results[2]" class="threeth_position text_position">
            <div class="position">
                3
            </div>
            <div class="war">
                {{ http.guilds?.results[2]?.name }}
            </div>
            <div class="level">
                {{ http.guilds?.results[2]?.level }}
            </div>
        </div>
        <div *ngIf="http.guilds?.results[3]" class="fourth_position text_position">
            <div class="position">
                4
            </div>
            <div class="war">
                {{ http.guilds?.results[3]?.name }}
            </div>
            <div class="level">
                {{ http.guilds?.results[3]?.level }}
            </div>
        </div>
        <div *ngIf="http.guilds?.results[4]" class="fith_position text_position">
            <div class="position">
                5
            </div>
            <div class="war">
                {{ http.guilds?.results[4]?.name }}
            </div>
            <div class="level">
                {{ http.guilds?.results[4]?.level }}
            </div>
        </div>
    </aside>
  </div>
  `,
  styles: []
})
export class GuildsComponent implements OnInit {

    guilds: any = [];

  constructor(
      public http: HttpService
  ) {
      this.load_guilds();
  }

  ngOnInit() {}

  load_guilds() {
      this.http.get_guilds().catch();
  }

}
