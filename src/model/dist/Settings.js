"use strict";
// Static class for storing game configurations
exports.__esModule = true;
exports.Settings = void 0;
var Settings = /** @class */ (function () {
    // Not meant to be instatiable
    function Settings() {
    }
    Settings.getGameDifficulty = function () {
        return Settings.gameDifficulty;
    };
    Settings.GameDifficulty = {
        easy: 3,
        normal: 4,
        hard: 5
    };
    // Default difficulty
    Settings.gameDifficulty = Settings.GameDifficulty['easy'];
    return Settings;
}());
exports.Settings = Settings;
