// Stores and randomizes integers 

export class Randomizer {

    private array: number[];
    private index: number;


    constructor(length: number) {
        this.array = new Array(length);
        for (let i = 0; i < length; ++i)
            this.array[i] = i + 1;

        this.index = 0;
        this.shuffle();
    }


    private shuffle() {
        for (let i = this.array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        }
    }


    next() {
        return this.array[this.index < this.array.length? this.index++ : this.array.length - 1];
    }
}