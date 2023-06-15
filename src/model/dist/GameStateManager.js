"use strict";
exports.__esModule = true;
exports.GameStateManager = void 0;
// Handles all responses relating to gameplay - from setting up gameplay resources to responding to user inputs
var GameBoard_1 = require("./GameBoard");
var GameStateManager = /** @class */ (function () {
    // Things we want to be done only once throughout the game
    function GameStateManager() {
        this.gameBoard = new GameBoard_1.GameBoard();
        this.init();
    }
    GameStateManager.prototype.init = function () {
        this.gameBoard.init();
        this.completionState = new Array(this.gameBoard.getCompletionState().length);
        this.completionState[0] = 0; // First row sums to 0
        var nth = this.completionState.length - 1;
        // Compute the sums of the subsequent rows
        for (var i = 1; i <= nth; ++i) {
            var initial = (i - 1) * nth + 1;
            this.completionState[i] = (2 * initial + (nth - 1)) * nth / 2;
        }
    };
    // Updates the game's internal state: generally handles gameplay logic
    GameStateManager.prototype.update = function () {
    };
    GameStateManager.prototype.isGameComplete = function () {
        var gameBoardCompletionState = this.gameBoard.getCompletionState();
        for (var i = 0; i < this.completionState.length; ++i)
            if (this.completionState[i] != gameBoardCompletionState[i])
                return false;
        return true;
    };
    GameStateManager.prototype.getGameBoard = function () {
        return this.gameBoard;
    };
    return GameStateManager;
}());
exports.GameStateManager = GameStateManager;
