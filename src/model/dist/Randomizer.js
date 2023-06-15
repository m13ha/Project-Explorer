"use strict";
// Stores and randomizes integers 
exports.__esModule = true;
exports.Randomizer = void 0;
var Randomizer = /** @class */ (function () {
    function Randomizer(length) {
        this.array = new Array(length);
        for (var i = 0; i < length; ++i)
            this.array[i] = i + 1;
        this.index = 0;
        this.shuffle();
    }
    Randomizer.prototype.shuffle = function () {
        var _a;
        for (var i = this.array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.array[j], this.array[i]], this.array[i] = _a[0], this.array[j] = _a[1];
        }
    };
    Randomizer.prototype.next = function () {
        return this.array[this.index < this.array.length ? this.index++ : this.array.length - 1];
    };
    return Randomizer;
}());
exports.Randomizer = Randomizer;
