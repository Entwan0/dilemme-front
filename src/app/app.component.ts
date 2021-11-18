import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  turn: string = "Joueur1";
  nbTurn: number = 0;
  scoreJ1: number = 0;
  scoreJ2: number = 0;

  constructor() {}

  ngOnInit() {
  }


  onClick($event: MouseEvent) {

  }
}
