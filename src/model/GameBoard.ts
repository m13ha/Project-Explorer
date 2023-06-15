// Handles game board logic

import { Settings } from "./Settings";
import { Vector2 } from "./Vector2";
import { Randomizer } from "./Randomizer";


export class GameBoard {
    // Internal representation of the game board
    private internalBoard: number[][];
    private size: number

    private randomizer: Randomizer;


    constructor() {
        this.init();
    }


    init() {
        this.initInternalBoard();
    }


    private initInternalBoard() {
        this.internalBoard = [];
        this.size = Settings.getGameDifficulty();
        this.randomizer = new Randomizer(this.size);

        // Push in the initial empty block.
        this.internalBoard.push([0]);

        for (let row = 1; row <= this.size; ++row) {
            this.internalBoard.push([]);
            for (let col = 0; col < this.size; ++col) {
                this.internalBoard[row].push(this.randomizer.next());
            }
        }
    }


    getInternalBoard() {
        return this.internalBoard;
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