import OutputView from '../view/OutputView.js';

import NumberArray from './NumberArray.js';
import Race from './Race.js';

class GameController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  start(names, tryNumber) {
    this.#race.setCars(names);
    OutputView.printMoveTitle();

    this.#moveCars(names, tryNumber);
  }

  #moveCars(names, tryNumber) {
    let currentTry = 0;
    while (currentTry < tryNumber) {
      this.#race.moveCars(NumberArray.create(names.length));
      OutputView.printCurrentMove(this.#race.getCars());
      currentTry += 1;
    }
  }
}

export default GameController;
