export class Planets {
  constructor(age) {
    this.age = age;
    this.lifeExp = 73;
  }

  mercuryAge() {
    this.age = parseFloat((this.age / 0.24).toFixed(2));
    this.lifeExp = parseFloat((this.lifeExp / 0.24).toFixed(2));
  }

  venusAge() {
    this.age = parseFloat((this.age / 0.62).toFixed(2))
    this.lifeExp = parseFloat((this.lifeExp / 0.62).toFixed(2));
  }

  marsAge() {
    this.age = parseFloat((this.age / 1.88).toFixed(2));
    this.lifeExp = parseFloat((this.lifeExp / 1.88).toFixed(2));
  }

  jupiterAge() {
    this.age = parseFloat((this.age / 11.86).toFixed(2));
    this.lifeExp = parseFloat((this.lifeExp / 11.86).toFixed(2));
  }  

}