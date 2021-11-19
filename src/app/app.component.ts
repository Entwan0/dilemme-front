import {Component, HostListener} from '@angular/core';
import {gameService} from "./services/game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player: number = 0
  turn: string ="joueur 1";
  nbTurn: number = 0;
  scoreJ1: number = 0;
  scoreJ2: number = 0;

  constructor(private gameService: gameService ) {
    this.gameService.getPlayer().subscribe((player) => {
      this.player = player;
      console.log(this.player)
      if(this.player == 2){
        this.waitOtherPLayer()
      }
    });
  }

  ngOnInit()  {

  }

  follow($event: MouseEvent){
    this.gameService.follow().subscribe((value => {
      console.log(this.turn);
      this.changeJoueur();
      console.log(this.turn);
      this.waitOtherPLayer();
    }));
  }

  betray($event: MouseEvent){
    this.gameService.betray().subscribe((value => {
      this.changeJoueur();
      this.waitOtherPLayer();
    }));
  }

  surrend($event: MouseEvent){
    this.gameService.surrend().subscribe((value => {
      this.changeJoueur();
      this.waitOtherPLayer();
    }));
  }

  waitOtherPLayer(){
    console.log("wait");
    this.gameService.wait(this.player).subscribe((async value => {
      console.log(value);
      if (value === false) {
        await this.sleep(1000);
        this.waitOtherPLayer();
      }else{
        this.changeJoueur();
      }
    }));
  }

  sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  changeJoueur() {
    if(this.turn == "joueur 1")this.turn = "joueur 2";
    else this.turn = "joueur 1";
  }
  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event:any) {
    this.gameService.leave(this.player).subscribe()
  }
}
