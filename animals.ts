class Animal {
    constructor(public name:string, private _type?:string, private _sound?: string){
        this.name = name;
        this._type = _type;
        this._sound = _sound;
    }

    makeSound = () => {
        if (this._type && this._sound) {
            console.log(`${this.name} the ${this._type} makes: ${this._sound}!`);
        } else {
            console.log('There is no sound.')
        }
    };
}

export class Dog extends Animal {
    constructor(name:string, type = 'Dog', sound = 'Bark'){
        super(name, type, sound);
    }
}

export class Cat extends Animal {
    constructor(name:string, type = 'Cat', sound = 'Meow'){
        super(name, type, sound);
    }
}