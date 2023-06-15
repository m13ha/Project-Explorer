import { GameStateManager } from "./GameStateManager";
import { Settings } from "./Settings";

let gsm = new GameStateManager();
let board = gsm.getGameBoard().getInternalBoard();

board.forEach((i) => console.log(i));