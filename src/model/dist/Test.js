"use strict";
exports.__esModule = true;
var GameStateManager_1 = require("./GameStateManager");
var gsm = new GameStateManager_1.GameStateManager();
var board = gsm.getGameBoard().getInternalBoard();
board.forEach(function (i) { return console.log(i); });
