import { GameStateManager } from "./GameStateManager";
import { Settings } from "./Settings";
import { Vector2 } from "./Vector2";

let gsm = new GameStateManager();
let board = gsm.getGameBoard();

board.getInternalBoard().forEach(element => {
    console.log(element);
});
console.log('\nboard state: ', board.getCompletionState());
console.log('\ncomplete state: ', gsm.completionState);
console.log('\n', gsm.isGameComplete());
