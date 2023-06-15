// Handles all responses relating to gameplay - from setting up gameplay resources to responding to user inputs
import { GameBoard } from "./GameBoard"


export class GameStateManager {

    private gameBoard: GameBoard;
    // How the sum of each row should look when the puzzle is arranged
    public completionState: number[]

    // Things we want to be done only once throughout the game
    constructor() {
        
        this.gameBoard = new GameBoard();
        this.init();
    }
    

    init(): void {
        this.gameBoard.init();
        this.completionState = new Array(this.gameBoard.getCompletionState().length);
        this.completionState[0] = 0;   // First row sums to 0

        let nth = this.completionState.length - 1;     
        
        // Compute the sums of the subsequent rows
        for (let i = 1; i <= nth; ++i) {
            let initial = (i - 1) * nth + 1;
            this.completionState[i] = (2 * initial + (nth - 1)) * nth /2;
        }
    }


    // Updates the game's internal state: generally handles gameplay logic
    private update(): void {

    }


    public isGameComplete(): boolean {
        let gameBoardCompletionState = this.gameBoard.getCompletionState();

        for (let i = 0; i < this.completionState.length; ++i)
            if (this.completionState[i] != gameBoardCompletionState[i])
                return false;
            
        return true;
    }

    public getGameBoard(): GameBoard {
        return this.gameBoard;
    }
}