import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statics',
  template: `
  <div class="info_players">
    240 Jugadores Ult. 24 Horas
  </div>

  <div class="info_registers">
    1200 Registrados
  </div>

  <div class="info_characters">
    3400 Personajes
  </div>`,
  styles: []
})
export class StaticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
