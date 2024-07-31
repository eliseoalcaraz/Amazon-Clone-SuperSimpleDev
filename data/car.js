class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${this.isTrunkOpen ? 'Open' : 'Closed'}`
    )
  }

  go() {
    if (!this.isTrunkOpen){
      this.speed += 5;
      if(this.speed > 200){
        this.speed = 200;
      }
    }
  }

  brake() {
    this.speed -= 5;

    if(this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if(this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (!this.isTrunkOpen){
      this.speed += this.acceleration;
      if(this.speed > 300){
        this.speed = 300;
      }
    }
  }

  openTrunk() {
    console.log('Racecar does not have trunk');
  }

  closeTrunk() {
    console.log('RaceCar does not have trunk');
  }
}

const cars = [
  {
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    brand: 'Tesla',
    model: 'Model 3'
  },
  {
    brand: 'Mclaren',
    model: 'F1',
    acceleration: 20
  }
].map((carDetails) => {
  if (!carDetails.acceleration){
    return new Car(carDetails);    
  } else {
    return new RaceCar(carDetails);
  }

});


console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars[2].go();
cars[2].go();
cars[2].go();
cars[2].displayInfo();
cars[2].openTrunk();
cars[2].go();
cars[2].displayInfo();
cars[2].brake();
cars[2].displayInfo();





