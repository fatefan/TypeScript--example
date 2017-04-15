function hw (person: string = 'world!'): string {
    return 'hello: '+person;
}
document.body.innerHTML = hw();