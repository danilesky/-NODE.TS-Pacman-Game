import { Character } from "./Character";
import { Player } from "./Player";

export class Game {
  private round: String[] = [];
  private players: Player[] = [];
  constructor() {}

  play(player: Player) {
    //this adds custom player to current game
    this.players.push(player);

    let currentPlayerCharacter: Character = player.getCharacters()[0];
    //find out skin of player
    let skin: string = currentPlayerCharacter.getSkin();

    //Starting Coordinates
    let y: number = 1;
    let x: number = 1;
    //Coordinates marking END and START of the this.round
    this.move(skin);
  }
  getRound(): String[] {
    return this.round;
  }
  setRound(round: String[]): void {
    this.round = round;
  }

  //dRAWING FUNCTIONS
  drawLine(y: number, x: number, skin: string) {
    this.round[y].substring(0, x) + skin + this.round[y].substring(x + 1);
    console.log(this.round);
    this.round[y] =
      this.round[y].substring(0, x) + " " + this.round[y].substring(x + 1);
  }
  //MOVING FUNCTIONS - Changing directions
  move(skin: string) {
    let y = 1;
    let x = 1;
    const YstartRound: number = 1;
    const YendRound: number = this.round.length - 1;

    const XstartRound: number = 1;
    const XendRound: number = this.round[y].length - 2;

    setInterval(() => {
      if (x === XendRound) {
        y = 1;
        x = XendRound;
      }

      this.drawLine(y, x, skin);

      setTimeout(() => {
        console.clear();
        x++;
      }, 100);
    }, 100);
  }
}
