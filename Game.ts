export class Game {
  private round: String[] = [];
  constructor() {}
  play() {
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
        this.round[y].substring(0, y) + "o" + this.round[y].substring(y + 1);
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
  setRound(round: String[]): any {
    this.round = round;
  }
}
