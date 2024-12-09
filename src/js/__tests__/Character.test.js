import Bowman from '../class/Bowman';
import Character from '../class/Character';

test('Создание Bowman персонажа', () => {
  const bowman = new Bowman('Robin');
  expect(bowman).toEqual({
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Ошибка при создании персонажа с коротким именем', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
});

test('Ошибка при создании персонажа с длинным именем', () => {
  expect(() => new Character('A'.repeat(11), 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
});

test('Ошибка при создании персонажа с некорректным типом', () => {
  expect(() => new Character('Robin', 'Warrior')).toThrow('Такой класс не доступен в этой версии');
});

test('Создание персонажа с корректным именем и типом', () => {
  const character = new Character('Hero', 'Zombie');
  expect(character).toEqual({
    name: 'Hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});
