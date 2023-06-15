import { GameStateManager } from "./GameStateManager";
import { Settings } from "./Settings";

let gsm = new GameStateManager();

console.log(gsm.getGameBoard().getInternalBoard());