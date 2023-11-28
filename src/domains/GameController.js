import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import NumberArray from './NumberArray.js';
import Race from './Race.js';

import hasError from '../utils/hasError.js';
import { validateCars, validateTryNumber } from '../validator/Validator.js';

class GameController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  async readCars() {
    const cars = await InputView.readCars();

    if (hasError(validateCars, cars)) {
      return await this.readCars();
    }

    return cars;
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();

    if (hasError(validateTryNumber, tryNumber)) {
      return await this.readTryNumber();
    }

    return tryNumber;
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

  printWinners() {
    OutputView.printWinners(this.#race.findWinner());
  }
}

export default GameController;
