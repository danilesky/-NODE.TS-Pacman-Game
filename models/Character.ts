import { Player } from "./Player";

export class Character {
  private skin: string = "o";
  player: Player;
  constructor(player: Player) {
    this.player = player;
    player.setCharacters(this);
  }

  setSkin(skin: string[0]) {
    if (skin.length === 1) {
      this.skin = skin;
      console.log(`Your current skin is : --> ${this.skin} <--`);
    } else {
      console.log(
        `This skin cannot be set.(Skin have to be single character.)\nYour current skin is : --> ${this.skin} <--`
      );
    }
  }
  getSkin() {
    return this.skin;
  }
}
