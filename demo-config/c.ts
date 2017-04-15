import { Animal,Information } from "./src/a";

class Cat extends Animal {
    constructor (public name: string){
        super(name);
    }
    info (info:Information): string {
        return `My name is ${info.name},I'M ${info.age} years old.`
    }
}

let mouse = new Cat("small mouse");
let eatStr = mouse.eat("fish");
let mouseInfo = mouse.info({name:"small mouse",age:0.6})
