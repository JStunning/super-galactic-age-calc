import { Planets } from '../src/planets';

describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Planets(10);

    mercury.mercuryAge();
  })

  test('mercury variables age should be 2.4 after running the mercury age function and when given 10', () => {
    expect(mercury.age).toEqual(2.4);
  })

  test('should take the earth life expectancy and convert it into mercury years', () => {
    expect(mercury.lifeExp).toEqual(17.52);
  })

});

describe('Venus', () => {

  let venus;

  beforeEach(() => {
    venus = new Planets(10);

    venus.venusAge();
  })

  test('venus variables age should be 6.2 after running the venus age function and when given 10', () => {
    expect(venus.age).toEqual(6.2);
  })

  test('should take the earth life expectancy and convert it into venus years', () => {
    expect(venus.lifeExp).toEqual(45.26);
  })

});

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Planets(10);

    mars.marsAge();
  })

  test('mars variables age should be 18.8 after running the mars age function and when given 10', () => {
    expect(mars.age).toEqual(18.8);
  })

  test('should take the earth life expectancy and convert it into mars years', () => {
    expect(mars.lifeExp).toEqual(137.24);
  })

});
