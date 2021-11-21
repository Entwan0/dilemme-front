import {Component, HostListener} from '@angular/core';
import {gameService} from "./services/game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player: number = 0;
  turn: string ="joueur 1";
  nbTurn: number = 0;
  scoreJ1: number = 0;
  scoreJ2: number = 0;

  constructor(private gameService: gameService ) {

  }

  ngOnInit()  {
    this.gameService.getPlayer().subscribe((player) => {
      this.player = player;
      if(this.player == 2){
        this.waitOtherPLayer()
      }
    });
  }

  follow($event: MouseEvent){
    this.gameService.follow().subscribe((t => {
      this.gameService.updatePoints().subscribe((value) => {
        let splitted = value.split(",",2);
        this.scoreJ1 = Number(splitted[0]);
        this.scoreJ2 = Number(splitted[1]);
        console.log(splitted[0]);
      })
      this.changeJoueur();
      this.waitOtherPLayer();
    }));
  }

  betray($event: MouseEvent){
    this.gameService.betray().subscribe((t => {
      this.gameService.updatePoints().subscribe((value) => {
        let splitted = value.split(",",2);
        this.scoreJ1 = Number(splitted[0]);
        this.scoreJ2 = Number(splitted[1]);
        console.log(splitted[0]);
      })
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
    this.gameService.wait(this.player).subscribe((async value => {
      if (value === false) {
        await this.sleep(1000);
        this.waitOtherPLayer();
      }else{
        this.gameService.updatePoints().subscribe((value) => {
          let splitted = value.split(",",2);
          this.scoreJ1 = Number(splitted[0]);
          this.scoreJ2 = Number(splitted[1]);
          console.log(splitted[0]);
          this.changeJoueur();
        })
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

  restart(){
    this.gameService.restart().subscribe((value => {
      window.location.reload();
    }));

  }

  @HostListener('window:beforeunload', ['$event'])
  public async  saveAndClosePromt($event: any) {
    this.gameService.leave(this.player).subscribe();
  }
}
