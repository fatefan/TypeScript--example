
import { Animal } from "./src/a";

class Dog extends Animal {
    constructor (public name: string){
        super(name);
    }
    calls (): string {
        return `汪汪~~ ${this.name} 在叫了!`
    }
}

let hu = new Dog("hu");
let str = hu.eat("肉");
let calls = hu.calls();
console.log("Dog: "+str);
console.log("Dog: "+calls);