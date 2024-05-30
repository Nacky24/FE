"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(click, count) {
        this.click = click;
        this.count = count;
        if (this.click === true) {
            this.count += 1;
        }
    }
    Object.defineProperty(Like.prototype, "likeState", {
        get: function () {
            return this.click;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "likeCount", {
        get: function () {
            return this.count;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
