// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log("Accelerating...");
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    console.log("Braking...");
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} is charged to ${this.charge}%`);
  }

  accelerate() {
    console.log("Accelerating...");
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate(); // Accelerating... Tesla going at 140 km/h, with a charge of 22%
tesla.brake(); // Braking... Tesla is going at 135 km/h
tesla.chargeBattery(90); // Tesla is charged to 90%
tesla.accelerate(); // Accelerating... Tesla going at 155 km/h, with a charge of 89%
