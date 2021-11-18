import { Component } from '@angular/core';
import {gameService} from "./services/game.service";

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

  constructor(private gameService: gameService ) {}

  ngOnInit() {
  }

  follow($event: MouseEvent){
    this.gameService.follow().subscribe();
  }

  betray($event: MouseEvent){
    this.gameService.betray().subscribe()
  }

  surrend($event: MouseEvent){
    this.gameService.surrend().subscribe()
  }

}
