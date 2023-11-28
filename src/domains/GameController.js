import NumberArray from './NumberArray.js';

class GameController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  start(tryNumber, names) {
    this.#race.setCars(names);

    while (tryNumber) {
      this.#race.moveCars(NumberArray.create(names.length));
    }
  }
}

export default GameController;
