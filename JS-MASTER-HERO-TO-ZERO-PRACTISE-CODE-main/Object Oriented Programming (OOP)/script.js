'use strict';
// **************Code Challenge 1************ 
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelrate = function () {
    return this.speed += 10
}
Car.prototype.brake = function () {
    return this.speed -=  5
}
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
*/
// console.log(car1.accelrate());
// console.log(car1.brake());
// console.log(car1.accelrate());
// console.log(car2.accelrate());
// console.log(car2.brake());
// console.log(car2.accelrate());
// **************Code Challenge 1************ 

// **************Code Challenge 2************ 
/*
class CarCl {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

    accelrate() {
        return this.speed += 10
    }
    brake(){
        return this.speed -=  5
    }
    get speedUS(){
        return this.speed / 1.6; 
    }
    set speedUS(speed){
        return this.speed = speed * 1.6; 
    }
}
const ford = new CarCl('Ford', 120);
*/
// console.log(ford.speedUS);
// console.log(ford.accelrate());
// console.log(ford.brake());
// console.log(ford.accelrate());
// console.log(ford.speedUS = 200);
// console.log(ford);
// **************Code Challenge 2************ 

// **************Code Challenge 3************
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelrate = function () {
    return this.speed += 10
}
Car.prototype.brake = function () {
    return this.speed -=  5
}


const EV = function (make, speed, batteryCharge) {
    Car.call(this,make,speed);
    this.batteryCharge = batteryCharge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo){
    console.log('EV chargeBattery');
    this.batteryCharge = chargeTo;
}
EV.prototype.accelrate = function () {
    console.log('EV accelerate');
     this.speed += 20;
    this.batteryCharge -= 1;
     console.log(`${this.make} going at ${this.speed}
     km/h, with a charge of ${this.batteryCharge}%`);
}
const tesla = new EV('Tesla',120,23);
*/
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// console.log(tesla);
// tesla.accelrate();
// console.log(tesla);
// **************Code Challenge 3************

// **************Code Challenge 4************
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelrate() {
        return this.speed += 10
    }
    brake() {
         this.speed -=  5;
         return this;

    }
}

class EVCl extends CarCl {
    #batteryCharge;
    constructor(make, speed, batteryCharge) {
        super(make, speed)
        this.#batteryCharge = batteryCharge;
        }
        chargeBattery(chargeTo){
            console.log('EV chargeBattery');
            this.#batteryCharge = chargeTo;
            return this;
        }
        accelrate() {
            console.log('EV accelerate');
             this.speed += 20;
            this.#batteryCharge -= 1;
             console.log(`${this.make} going at ${this.speed}
             km/h, with a charge of ${this.#batteryCharge}%`);
             return this;
        }
}
const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
rivian.accelrate().chargeBattery(90).brake();

console.log(rivian);
// rivian.chargeBattery(90);
// console.log(rivian);
// **************Code Challenge 4************