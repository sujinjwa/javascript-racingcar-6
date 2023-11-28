import NumberArray from './NumberArray.js';
import Race from './Race.js';

class GameController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  start(names, tryNumber) {
    this.#race.setCars(names);

    let currentTry = 0;
    while (currentTry < tryNumber) {
      this.#race.moveCars(NumberArray.create(names.length));
      currentTry += 1;
    }
  }
}

export default GameController;
