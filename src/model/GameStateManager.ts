// Handles inner gameplay logic

import { Gameboard } from "./Gameboard";


export class GameStateManager {

    private gameBoard: Gameboard
    // How the sum of each row should look when the puzzle is arranged
    private completionState: number[]

    // Things we want to be done only once throughout the game
    constructor() {
        
        this.gameBoard = new Gameboard();
        this.init();
    }
    

    init(): void {
        this.gameBoard.init();
        this.completionState = new Array(this.gameBoard.getCompletionState().length);
        this.completionState[0] = 0;   // First row sums to 0

        let n = this.completionState.length - 1;         
        // Compute the sums of the subsequent rows by computing the sum of consecutive integers, where "initial" is the first integer
        for (let i = 1; i <= n; ++i) {
            let initial = (i - 1) * n + 1;
            // sum = (2a + (n-1)d) * n/2 -> sum of the numbers in an arithmetric progression sequence
            this.completionState[i] = (2 * initial+ (n - 1)) * n / 2;    // a = initial, d = 1
        }
    }


    // Updates the game's internal state: generally handles gameplay logic
    private update(): void {

    }


    isGameComplete(): boolean {
        let gameBoardCompletionState = this.gameBoard.getCompletionState();

        for (let i = 0; i < this.completionState.length; ++i)
            if (this.completionState[i] != gameBoardCompletionState[i])
                return false;
            
        return true;
    }


    getCompletionState(): number[] {
        return this.completionState;
    }

    getGameBoard(): Gameboard {
        return this.gameBoard;
    }

    getGameboardAsArray(): number[][] {
        return this.gameBoard.getInternalBoard();
    }
}