import { Character } from "./Character";

export class Player {
  name: string;
  protected characters: Character[] = [];
  constructor(name: string) {
    this.name = name;
  }
  getCharacters() {
    return this.characters;
  }
  setCharacters(character: Character) {
    this.characters.push(character);
  }
}
