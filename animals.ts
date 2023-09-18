private class Animal {
    type: String;
    sound: String;

    constructor(type:string, sound: string){
        this.type = type;
        this.sound = sound;
    }

    makeSound(sound: String) {
        console.log(`Makes: ${sound}`)
    }
}

