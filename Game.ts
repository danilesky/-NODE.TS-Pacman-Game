import { Player } from "./Player";

export class Game {
  private round: String[] = [];

  constructor() {}

  play(player: Player) {
    //skin of player
    let skin: string = player.getCharacters()[0].getSkin();
    //Starting Coordinates
    let y: number = 1;
    let x: number = 1;
    //Coordinates marking END and START of the this.round
    const YstartRound: number = 1;
    const YendRound: number = this.round.length - 1;

    const XstartRound: number = 1;
    const XendRound: number = y === 1 ? y : this.round[y].length - 1;

    setInterval(async () => {
      if (y === YstartRound || y === YendRound) {
        y = 1;
      }
      this.round[y] =
        this.round[y].substring(0, y) + skin + this.round[y].substring(y + 1);
      console.log(this.round);
      this.round[y] =
        this.round[y].substring(0, y) + " " + this.round[y].substring(y + 1);
      setTimeout(() => {
        console.clear();
        y++;
      }, 100);
    }, 100);
  }
  getRound(): String[] {
    return this.round;
  }
  setRound(round: String[]): void {
    this.round = round;
  }
}
