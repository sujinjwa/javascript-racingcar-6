import Car from './Car.js';

class Race {
  #cars;

  constructor() {
    this.#cars = [];
  }

  setCars(names) {
    names.forEach((name) => this.#cars.push(new Car(name)));
  }

  moveCars(numbers) {
    this.#cars.forEach((car, index) => car.move(numbers[index]));
  }

  getCars() {
    return this.#cars.map((car) => car.get());
  }

  calculateMaxDistance() {
    let maxDistance = 0;
    this.#cars.forEach((car) => {
      if (car.get()[1] > maxDistance) {
        maxDistance = car.get()[1];
      }
    });

    return maxDistance;
  }

  calculateWinner() {
    const maxDistance = this.calculateMaxDistance();
    const winners = this.#cars.filter((car) => car.get()[1] === maxDistance);

    return winners;
  }
}

export default Race;
