webpackJsonp([0],{

/***/ 2:
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
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.calls = function () {
        return "\u6C6A\u6C6A~~ " + this.name + " \u5728\u53EB\u4E86!";
    };
    return Dog;
}(a_1.Animal));
var hu = new Dog("hu");
var str = hu.eat("肉");
var calls = hu.calls();
console.log("Dog: " + str);
console.log("Dog: " + calls);


/***/ })

},[2]);