import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMoveTitle() {
    Console.print('');
    Console.print('실행 결과');
  },

  printCurrentMove(cars) {
    cars.forEach((car) => {
      const [name, distance] = car;
      Console.print(`${name} : ${'-'.repeat(distance)}`);
    });
    Console.print('');
  },

  printWinners(names) {
    Console.print(`최종 우승자 : ${names.join(', ')}`);
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
