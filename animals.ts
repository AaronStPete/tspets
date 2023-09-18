class Animal {
    constructor(private _type?:string, private _sound?: string){
        this._type = _type;
        this._sound = _sound;
    }

    makeSound = () => {
        if (this._sound) {
            console.log(`Makes: ${this._sound}!`);
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