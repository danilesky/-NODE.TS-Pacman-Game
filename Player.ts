export class Player {
  name: string;
  private character: { [key: string]: any } = {
    skin: "o",
  };

  constructor(name: string) {
    this.name = name;
  }

  setSkin(skin: string): void {
    this.character.skin = skin;
  }
  getSkin(): string {
    return this.character.skin;
  }
}
