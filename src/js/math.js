export default class MathCharacter {
  constructor() {
    this.stoned = false;
    this.distance = 1;
  }

  setStoned(value) {
    this.stoned = value;
  }

  getStoned() {
    return this.stoned;
  }

  getAttack() {
    const att = this.attack - (this.distance - 1) * (this.attack * 0.1);
    if (this.stoned) {
      return Math.round(att - Math.log2(this.distance) * 5);
    }
    return att;
  }

  setAttack(value) {
    this.attack = value;
  }
}
