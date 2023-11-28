import RandomNumber from './RandomNumber.js';

const NumberArray = {
  create(length) {
    let arr = [];
    while (arr.length < length) {
      arr.push(RandomNumber.create());
    }

    return arr;
  },
};

export default NumberArray;
