import GameController from './domains/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    const cars = await this.gameController.readCars();
    const tryNumber = await this.gameController.readTryNumber();

    this.gameController.start(cars, tryNumber);
    this.gameController.printWinners();
  }
}

export default App;
