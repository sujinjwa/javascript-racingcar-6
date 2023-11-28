import Car from '../src/domains/Car.js';

describe('Car 클래스 테스트', () => {
  test.each([[4], [5], [6], [7], [8], [9]])(
    '무작위 값이 4 이상이면 전진한다.',
    (number) => {
      // given
      const car = new Car('sujin');

      // when
      car.move(number);

      // then
      const [_, distance] = car.get();
      expect(distance).toBe(1);
    },
  );

  test.each([[0], [1], [2], [3]])(
    '무작위 값이 4 미만이면 전진하지 않는다.',
    (number) => {
      // given
      const car = new Car('sujin');

      // when
      car.move(number);

      // then
      const [_, distance] = car.get();
      expect(distance).toBe(0);
    },
  );
});
