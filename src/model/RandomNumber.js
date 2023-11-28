import { Random } from '@woowacourse/mission-utils';

import { RANDOM_NUMBER } from '../constants/number.js';

const RandomNumber = {
  create() {
    return Random.pickNumberInRange(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
  },
};

export default RandomNumber;
