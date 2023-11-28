import InputView from './view/InputView.js';

class App {
  async play() {
    const cars = await InputView.readCars();
    const tryNumber = await InputView.readTryNumber();
  }
}

export default App;
