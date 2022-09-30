import { Game } from "./Game";
import { rounds } from "./rounds";

//making new game
let newGame = new Game();
//set round
newGame.setRound(rounds[1]);

//Play Game
newGame.play();
