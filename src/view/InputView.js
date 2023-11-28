import { Console } from '@woowacourse/mission-utils';

import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readCars() {
    const cars = await Console.readLineAsync(MESSAGE.INPUT_CAR);

    return cars;
  },
};

export default InputView;
