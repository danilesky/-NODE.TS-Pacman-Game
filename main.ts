import { Game } from "./Game";
import { Player } from "./Player";
import { rounds } from "./rounds";

//making new game
let newGame: Game = new Game();

//make new player
let newPlayer: Player = new Player("John");
//set round
newGame.setRound(rounds[1]);

//Play Game
newGame.play(newPlayer);
