// Stores and randomizes integers. Disposable - It is created in every new game

export class Randomizer {

    // The numbers assigned the each tile on the grid
    private array: number[];
    private index: number;


    constructor(length: number) {
        this.array = new Array(length);
        for (let i = 0; i < length; ++i)
            // Assign numbers form 1 up to length
            this.array[i] = i + 1;

        this.index = 0;
        this.randomize();
    }


    private randomize(): void {
        for (let i = this.array.length - 1; i > 0; i--) {
            // Generate an index from 1 up to i. The element at the random index, j,  will be swapped with the element at index i
            const j = Math.floor(Math.random() * i + 1);
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        }
    }

    // Returns the current element the index points to, then increments the index
    next(): number {
        return this.array[this.index < this.array.length? this.index++ : this.array.length - 1];
    }
}