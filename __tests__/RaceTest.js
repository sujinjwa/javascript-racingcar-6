import Race from '../src/domains/Race.js';

describe('Race 클래스 테스트', () => {
  test('최종 우승자를 구한다.', async () => {
    // given
    const race = new Race();
    const names = ['pobi', 'sujin', 'james', 'jason'];
    const randomNumbers = [1, 1, 4, 4];
    race.setCars(names);

    // when
    race.moveCars(randomNumbers);

    // then
    const winners = race.findWinner();
    expect(winners).toStrictEqual(['james', 'jason']);
  });

  test('최종 우승자를 구한다.', async () => {
    // given
    const race = new Race();
    const names = ['pobi', 'sujin', 'james', 'jason'];
    const randomNumbers = [1, 8, 3, 2];
    race.setCars(names);

    // when
    race.moveCars(randomNumbers);

    // then
    const winners = race.findWinner();
    expect(winners).toStrictEqual(['sujin']);
  });
});
