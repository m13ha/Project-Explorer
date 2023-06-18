"use strict";
exports.__esModule = true;
var GameStateManager_1 = require("./GameStateManager");
var gsm = new GameStateManager_1.GameStateManager();
var board = gsm.getGameBoard();
board.getInternalBoard().forEach(function (element) {
    console.log(element);
});
console.log('\nboard state: ', board.getCompletionState());
console.log('\ncomplete state: ', gsm.getCompletionState());
console.log('\n', gsm.isGameComplete());
