var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (food) {
        return this.name + " \u559C\u6B22\u5403 " + food;
    };
    return Animal;
}());
export { Animal };
//# sourceMappingURL=a.js.map