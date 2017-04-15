webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var a_1 = __webpack_require__(0);
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.info = function (info) {
        return "My name is " + info.name + ",I'M " + info.age + " years old.";
    };
    return Cat;
}(a_1.Animal));
var mouse = new Cat("small mouse");
var eatStr = mouse.eat("fish");
var mouseInfo = mouse.info({ name: "small mouse", age: 0.6 });
console.log("Cat: " + mouseInfo);
console.log("Cat: " + eatStr);


/***/ })
],[1]);