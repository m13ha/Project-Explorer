"use strict";
// Stores and randomizes integers. Disposable - It is created in every new game
exports.__esModule = true;
exports.Randomizer = void 0;
var Randomizer = /** @class */ (function () {
    function Randomizer(length) {
        this.array = new Array(length);
        for (var i = 0; i < length; ++i)
            // Assign numbers form 1 up to length
            this.array[i] = i + 1;
        this.index = 0;
        this.randomize();
    }
    Randomizer.prototype.randomize = function () {
        var _a;
        for (var i = this.array.length - 1; i > 0; i--) {
            // Generate an index from 1 up to i. The element at the random index, j,  will be swapped with the element at index i
            var j = Math.floor(Math.random() * i + 1);
            _a = [this.array[j], this.array[i]], this.array[i] = _a[0], this.array[j] = _a[1];
        }
    };
    // Returns the current element the index points to, then increments the index
    Randomizer.prototype.next = function () {
        return this.array[this.index < this.array.length ? this.index++ : this.array.length - 1];
    };
    return Randomizer;
}());
exports.Randomizer = Randomizer;
