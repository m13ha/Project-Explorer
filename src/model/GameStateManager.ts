// Handles all responses relating to gameplay - from setting up gameplay resources to responding to user inputs
import { GameBoard } from "./GameBoard"


export class GameStateManager {

    private gameBoard: GameBoard;

    // Things we want to be done only once throughout the game
    constructor() {
        
        this.gameBoard = new GameBoard();
        this.init();
    }
    

    init() {

        this.gameBoard.init();
    }


    // Updates the game's internal state
    private update() {

    }

    private isGameComplete() {
        
    }

    public getGameBoard() {
        return this.gameBoard;
    }
}