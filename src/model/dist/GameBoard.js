"use strict";
// Handles game board logic
exports.__esModule = true;
exports.GameBoard = void 0;
var Settings_1 = require("./Settings");
var Randomizer_1 = require("./Randomizer");
var GameBoard = /** @class */ (function () {
    function GameBoard() {
        this.init();
    }
    GameBoard.prototype.init = function () {
        this.initInternalBoard();
    };
    GameBoard.prototype.initInternalBoard = function () {
        this.internalBoard = [];
        this.size = Settings_1.Settings.getGameDifficulty();
        this.randomizer = new Randomizer_1.Randomizer(Math.pow(this.size, 2));
        // Push in the initial empty block.
        this.internalBoard.push([0]);
        for (var row = 1; row <= this.size; ++row) {
            this.internalBoard.push([]);
            for (var col = 0; col < this.size; ++col) {
                this.internalBoard[row].push(this.randomizer.next());
            }
        }
    };
    GameBoard.prototype.getInternalBoard = function () {
        return this.internalBoard;
    };
    GameBoard.prototype.moveTile = function (from, to) {
        // check movement validity
        if (this.internalBoard[to.x][to.y] != 0)
            return false;
        this.internalBoard[to.x][to.y] = this.internalBoard[from.x][from.y];
        this.internalBoard[from.x][from.y] = 0;
        return true;
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
