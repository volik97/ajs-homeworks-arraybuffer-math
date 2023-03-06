
import Magician from '../Magician';
import Daemon from '../Daemon';

test('Not Stoned', () => {
  const hero = new Magician();
  hero.distance = 3;
  expect(hero.getAttack()).toBe(80);
});

test('Stoned', () => {
  const hero = new Daemon();
  hero.distance = 3;
  hero.setStoned(true);
  expect(hero.getAttack()).toBe(72);
});
