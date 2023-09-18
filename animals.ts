class Animal {
    constructor(private _type?:string, private _sound?: string){
        this._type = _type;
        this._sound = _sound;
    }

    makeSound = () => {
        if (this._type && this._sound) {
            console.log(`${this._type} makes: ${this._sound}!`);
        } else {
            console.log('There is no sound.')
        }
    };
}

export class Dog extends Animal {
    constructor(type = 'Dog', sound = 'Bark'){
        super(type, sound);
    }
}

export class Cat extends Animal {
    constructor(type = 'Cat', sound = 'Meow'){
        super(type, sound);
    }
}