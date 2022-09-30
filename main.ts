import { Character } from "./Character";
import { Game } from "./Game";
import { Player } from "./Player";
import { rounds } from "./rounds";

//making new game
let newGame: Game = new Game();

//make new player
let newPlayer: Player = new Player("John");
let newCharacter: Character = new Character(newPlayer);

//Set custom character which is played by player in our game

//setting custom character skin
newCharacter.setSkin("$");
//set round
newGame.setRound(rounds[1]);

//Play Game
newGame.play(newPlayer);
