interface IKey {
    // signature: number;
    getSignature(): number;
}
class Key implements IKey{
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}
    
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[] = [];
    constructor(key: Key) {
        this.door = false;
        this.key = key;
    }
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }
    abstract openDoor(key: Key): void;
}

class MyHouse extends House{
    constructor(key: Key) {
        super(key);
    }
    openDoor(curentKey: Key): void {
        if (this.key === curentKey) {
            this.door = true;
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};