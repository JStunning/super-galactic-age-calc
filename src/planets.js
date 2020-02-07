export class Planets {
  constructor(age) {
    this.age = age;
    this.lifeExp = 73;
  }

  mercuryAge() {
    this.age = this.age * 0.24;
    this.lifeExp = this.lifeExp * 0.24;
  }

  venusAge() {
    this.age = this.age * 0.62;
    this.lifeExp = this.lifeExp * 0.62;
  }

  marsAge() {
    this.age = parseFloat((this.age * 1.88).toFixed(2));
    this.lifeExp = parseFloat((this.lifeExp * 1.88).toFixed(2));
  }

  jupiterAge() {
    this.age = this.age * 11.86;
    this.lifeExp = this.lifeExp * 11.86;
  }  

}