import { classNames } from './classNames';

describe('classNames', () => {
  test('add one class', () => {
    const expected = 'class';
    expect(classNames('class')).toBe(expected);
  });

  test('with additional classes', () => {
    const expected = 'class class 1 class 2';
    expect(classNames('class', {}, ['class 1', 'class 2'])).toBe(expected);
  });

  test('with mods classes', () => {
    const expected = 'class class 1 class 2 hovered visibled';
    expect(classNames(
      'class',
      { hovered: true, visibled: true },
      ['class 1', 'class 2'],
    ))
      .toBe(expected);
  });

  test('with mods classes false', () => {
    const expected = 'class class 1 class 2 hovered';
    expect(classNames(
      'class',
      { hovered: true, visibled: false },
      ['class 1', 'class 2'],
    ))
      .toBe(expected);
  });

  test('with mods classes undefined', () => {
    const expected = 'class class 1 class 2 hovered';
    expect(classNames(
      'class',
      { hovered: true, visibled: undefined },
      ['class 1', 'class 2'],
    ))
      .toBe(expected);
  });
});
