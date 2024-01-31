/**
 * @typedef {Object} Move
 * @property {number} xDirection
 */
export class Move {
  /**
   * @type {Position}
   */
  position;

  /**
   * @type {Direction}
   */
  direction;

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  constructor() {
    this.position = new Position();
    this.direction = new Direction(
      this.getDirection(this.x, 0),
      this.getDirection(this.y, 0),
    );
  }

  move() {
    this.xMove();
    this.yMove();
  }

  yMove() {
    const move = this.getNextMove(this.position.y, this.direction.y);

    this.direction.y = move.direction;
    this.position.setY(move.position);
  }

  /**
   *
   * @param {number} currentPos
   * @param {number} currentDirection
   * @returns {{direction: number, position: number}}
   */
  getNextMove(currentPos, currentDirection) {
    const move = Math.random() * 10;

    const direction = this.getDirection(currentPos, move, currentDirection);

    return {
      direction,
      position: currentPos + move * direction,
    };
  }

  /**
   *
   * @param {number} position
   * @param {number} move
   * @param {?number} currentDirection
   * @returns {number}
   */
  getDirection(position, move, currentDirection) {
    if (position + move > 90) {
      return -1;
    }

    if (position - move < 10) {
      return 1;
    }

    return currentDirection ?? 1;
  }

  xMove() {
    const move = this.getNextMove(this.position.x, this.direction.x);
    this.direction.x = move.direction;
    this.position.setX(move.position);
  }

  get xDirection() {
    return this.direction.x;
  }
}

class Position {
  x;
  y;

  /**
   * @param {number} x
   */
  setX(x) {
    if (x > 0 && x < 100) {
      this.x = x;
    }
  }

  constructor() {
    this.x = Math.random() * 100;
    this.y = Math.random() * 100;
  }

  /**
   * @param {number} y
   */
  setY(y) {
    if (y > 0 && y < 100) {
      this.y = y;
    }
  }
}

class Direction {
  x;
  y;

  /**
   * @param {1|-1} x
   * @param {1|-1} y
   */
  constructor(x, y) {
    this.setX(x);
    this.setY(y);
  }

  setY(y) {
    if ([1, -1].includes(y)) {
      this.y = y;
    }
  }

  setX(x) {
    if ([1, -1].includes(x)) {
      this.x = x;
    }
  }
}
