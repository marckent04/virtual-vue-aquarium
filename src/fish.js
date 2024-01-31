export class Fish {
  id;
  type;
  name;
  health;
  maxHealth;
  moveDuration;

  /**
   * @param {string} name
   * @param {string} type
   */
  constructor(name, type) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.type = type;
    this.maxHealth = 100;
    this.health = 100;
    this.moveDuration = Number.parseInt((Math.random() * 1000).toString());
  }

  feed() {
    this.health = this.maxHealth;
  }

  /**
   * @returns {boolean}
   */
  needFood() {
    return this.health > 0 && this.health < 30;
  }

  /**
   * @returns {number}
   */
  get healthPercentage() {
    const percentage = (this.health * 100) / this.maxHealth;
    return Math.max(0, percentage);
  }
}
