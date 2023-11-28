import InputView from './view/InputView.js';

class App {
  async play() {
    const cars = await InputView.readCars();
  }
}

export default App;
