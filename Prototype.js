//Object Literals
const person = {
    alive: true
}
const musician = {
    plays: true
}




//gerPrototypeOf and setProtoType

Object.setPrototypeOf(musician, person);

console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

console.log(musician.alive);



//Extending the prototype chain =>general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);


const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(materil) {
        this.seats = materil;
    }
}

const luxuryCar = {}
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log("")
console.log(luxuryCar.doors);
console.log(car.seatMaterial);

Object.keys(luxuryCar).forEach(key => {
    console.log(key);
});



//Object constructors
function Animal(species) {
    this.species = species;
    this.eats = true;
}
Animal.prototype.walks = function () {
    return `A ${this.species} is walking`;
}

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

console.log(Bear.__proto__ === Animal.prototype);
console.log(Bear);


//es4 classess;

class Vehicle {
    constructor() {
        this.wheels = 4,
            this.motorized = true
    }

    ready() {
        return "ready to go!"
    }



}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }
    wheelie() {
        return "On the wheel now!";
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.ready());
console.log(myBike.wheelie());


const myTruck = new Vehicle();
console.log(myTruck);




