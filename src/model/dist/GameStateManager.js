"use strict";
// Handles inner gameplay logic
exports.__esModule = true;
exports.GameStateManager = void 0;
var Gameboard_1 = require("./Gameboard");
var GameStateManager = /** @class */ (function () {
    // Things we want to be done only once throughout the game
    function GameStateManager() {
        this.gameBoard = new Gameboard_1.Gameboard();
        this.init();
    }
    GameStateManager.prototype.init = function () {
        this.gameBoard.init();
        this.completionState = new Array(this.gameBoard.getCompletionState().length);
        this.completionState[0] = 0; // First row sums to 0
        var n = this.completionState.length - 1;
        // Compute the sums of the subsequent rows by computing the sum of consecutive integers, where "initial" is the first integer
        for (var i = 1; i <= n; ++i) {
            var initial = (i - 1) * n + 1;
            // sum = (2a + (n-1)d) * n/2 -> sum of the numbers in an arithmetric progression sequence
            this.completionState[i] = (2 * initial + (n - 1)) * n / 2; // a = initial, d = 1
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
    GameStateManager.prototype.getCompletionState = function () {
        return this.completionState;
    };
    GameStateManager.prototype.getGameBoard = function () {
        return this.gameBoard;
    };
    GameStateManager.prototype.getGameboardAsArray = function () {
        return this.gameBoard.getInternalBoard();
    };
    return GameStateManager;
}());
exports.GameStateManager = GameStateManager;
