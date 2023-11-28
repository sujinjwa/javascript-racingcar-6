import { Console } from '@woowacourse/mission-utils';

import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readCars() {
    const cars = await Console.readLineAsync(MESSAGE.INPUT_CAR);

    return cars.split(',');
  },

  async readTryNumber() {
    const tryNumber = await Console.readLineAsync(MESSAGE.INPUT_TRY_NUMBER);

    return Number(tryNumber);
  },
};

export default InputView;
