import { Planets } from '../src/planets';

describe('Mercury', () => {

  test('mercury variables age should be 0.24 after running the mercury age function and when given 1', () => {

    let mercury = new Planets(1);

    mercury.mercuryAge();

    expect(mercury.age).toEqual(0.24);

  }) //Passes

});

describe('Venus', () => {

  test('venus variables age should be 0.62 after running the venus age function and when given 1', () => {

    let venus = new Planets(1);

    venus.venusAge();

    expect(venus.age).toEqual(0.62);

  }) //Passes

});

describe('Mars', () => {

  test('mars variables age should be 1.88 after running the mars age function and when given 1', () => {

    let mars = new Planets(1);

    mars.marsAge();

    expect(mars.age).toEqual(1.88);

  }) //Passes

});

describe('Jupiter', () => {

  test('jupiter variables age should be 11.86 after running the jupiter age function and when given 1', () => {

    let jupiter = new Planets(1);

    jupiter.jupiterAge();

    expect(jupiter.age).toEqual(11.86);

  }) //Passes

});
