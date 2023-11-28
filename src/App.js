import InputView from './view/InputView.js';
import GameController from './domains/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    const cars = await InputView.readCars();
    const tryNumber = await InputView.readTryNumber();

    this.gameController.start(cars, tryNumber);
    this.gameController.printWinners();
  }
}

export default App;
