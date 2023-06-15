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
    };
    // Updates the game's internal state
    GameStateManager.prototype.update = function () {
    };
    GameStateManager.prototype.isGameComplete = function () {
    };
    GameStateManager.prototype.getGameBoard = function () {
        return this.gameBoard;
    };
    return GameStateManager;
}());
exports.GameStateManager = GameStateManager;
