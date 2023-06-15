// Handles game board logic

import { Settings } from "./Settings";
import { Vector2 } from "./Vector2";
import { Randomizer } from "./Randomizer";


export class GameBoard {
    // Internal representation of the game board
    private internalBoard: number[][];
    private size: number
    private dimension: number

    private randomizer: Randomizer;
    
    // The current sum of each row on the board
    private completionState: number[]


    constructor() {
        this.init();
    }


    init(): void {
        this.size = Settings.getGameDifficulty();
        this.dimension = this.size ** 2;
        this.randomizer = new Randomizer(this.dimension);
        
        this.initInternalBoard();

        // Initialize the completion state: Must be done after the game board is initialized
        // The completion state for each row is calculated by computing the sum of conscecutive numbers (where the first number is the first number on the row)
        this.completionState = new Array(this.size + 1);
        this.internalBoard.forEach((value, index) => {
            this.completionState[index] = value.reduce((a, b) => a + b);
        });
    }


    private initInternalBoard(): void {
        this.internalBoard = [];
        // Push in the initial empty block.
        this.internalBoard.push([0]);

        for (let row = 1; row <= this.size; ++row) {
            this.internalBoard.push([]);
            for (let col = 0; col < this.size; ++col) {
                this.internalBoard[row].push(this.randomizer.next());
            }
        }
    }


    getSize(): number {
        return this.size;
    }


    getInternalBoard(): number[][] {
        return this.internalBoard;
    }


    getCompletionState(): number[] {
        return this.completionState;
    }


    moveTile(from: Vector2, to: Vector2): boolean {
        // check movement validity
        if (this.internalBoard[to.x][to.y] != 0)
            return false;
        
        this.internalBoard[to.x][to.y] = this.internalBoard[from.x][from.y];
        this.internalBoard[from.x][from.y] = 0;

        return true;
    }
}