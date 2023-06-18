"use strict";
// Handles game board logic
exports.__esModule = true;
exports.Gameboard = void 0;
var Settings_1 = require("./Settings");
var Randomizer_1 = require("./Randomizer");
var Gameboard = /** @class */ (function () {
    function Gameboard() {
        this.init();
    }
    Gameboard.prototype.init = function () {
        var _this = this;
        this.size = Settings_1.Settings.getGameDifficulty();
        this.dimension = Math.pow(this.size, 2);
        this.randomizer = new Randomizer_1.Randomizer(this.dimension);
        this.initInternalBoard();
        // Initialize the completion state: Must be done after the game board is initialized
        // The current completion state of the game board is calculated by computing the sum of all numbers in the rows
        this.completionState = new Array(this.size + 1);
        this.internalBoard.forEach(function (value, index) {
            _this.completionState[index] = value.reduce(function (a, b) { return a + b; });
        });
    };
    Gameboard.prototype.initInternalBoard = function () {
        this.internalBoard = [];
        // Push in the initial empty block.
        this.internalBoard.push([0]);
        for (var row = 1; row <= this.size; ++row) {
            this.internalBoard.push([]);
            for (var col = 0; col < this.size; ++col) {
                this.internalBoard[row].push(this.randomizer.next());
            }
        }
    };
    Gameboard.prototype.getSize = function () {
        return this.size;
    };
    Gameboard.prototype.getInternalBoard = function () {
        return this.internalBoard;
    };
    Gameboard.prototype.getCompletionState = function () {
        return this.completionState;
    };
    Gameboard.prototype.moveTile = function (from, to) {
        // check movement validity
        if (this.internalBoard[to.x][to.y] != 0)
            return false;
        this.internalBoard[to.x][to.y] = this.internalBoard[from.x][from.y];
        this.internalBoard[from.x][from.y] = 0;
        return true;
    };
    return Gameboard;
}());
exports.Gameboard = Gameboard;
