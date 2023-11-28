import { MOVABLE_NUMBER } from '../constants/number.js';

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move(number) {
    if (number >= MOVABLE_NUMBER) this.#distance += 1;
  }

  get() {
    return [this.#name, this.#distance];
  }
}

export default Car;
