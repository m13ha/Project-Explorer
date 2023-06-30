import { GameStateManager } from "../model/GameStateManager";
import { Gameboard } from "../model/Gameboard";
import { Settings } from "../model/Settings";



// STARTS THE GAME AND SETS THE DIFFICULTY LEVEL
// RETURNS AND EXPORTS THE GAME BOARD

let gameBoard: GameStateManager;

const launchGame = (difficulty: string) => {
    Settings.setGameDifficulty(difficulty);
    gameBoard = new GameStateManager();
    console.log(Settings.getGameDifficulty())
    return gameBoard.getGameBoard()
}

export {launchGame, gameBoard}