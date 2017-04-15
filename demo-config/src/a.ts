export class Animal {
    constructor (public name: string) {

    }
    eat (food: string):string {
        return `${this.name} 喜欢吃 ${food}`;
    }

}

export interface Information {
    name: string;
    age: number;
}