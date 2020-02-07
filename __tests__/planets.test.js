import { Planets } from '../src/planets';

describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Planets(10);

    mercury.mercuryAge();
  })

  test('mercury variables age should be 41.67 after running the mercury age function and when given 10', () => {
    expect(mercury.age).toEqual(41.67);
  })

  test('should take the earth life expectancy and convert it into mercury years', () => {
    expect(mercury.lifeExp).toEqual(304.17);
  })

});

describe('Venus', () => {

  let venus;

  beforeEach(() => {
    venus = new Planets(10);

    venus.venusAge();
  })

  test('venus variables age should be 16.13 after running the venus age function and when given 10', () => {
    expect(venus.age).toEqual(16.13);
  })

  test('should take the earth life expectancy and convert it into venus years', () => {
    expect(venus.lifeExp).toEqual(117.74);
  })

});

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Planets(10);

    mars.marsAge();
  })

  test('mars variables age should be 5.32 after running the mars age function and when given 10', () => {
    expect(mars.age).toEqual(5.32);
  })

  test('should take the earth life expectancy and convert it into mars years', () => {
    expect(mars.lifeExp).toEqual(38.83);
  })

});

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Planets(10);

    jupiter.jupiterAge();
  })

  test('jupiter variables age should be 0.84 after running the jupiter age function and when given 10', () => {
    expect(jupiter.age).toEqual(0.84);
  })

  test('should take the earth life expectancy and convert it into jupiter years', () => {
    expect(jupiter.lifeExp).toEqual(6.16);
  })

});