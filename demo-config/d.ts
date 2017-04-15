
import { Animal } from "./src/a";

class Dog extends Animal {
    constructor (public name: string){
        super(name);
    }
}

let hu = new Dog("hu");
let str = hu.eat("肉");
console.log(str);