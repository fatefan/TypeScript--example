function hw(person) {
    if (person === void 0) { person = 'world!'; }
    return 'hello: ' + person;
}
document.body.innerHTML = hw();
