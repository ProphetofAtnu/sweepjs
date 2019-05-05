const Cell = require("cell.js");

class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.area = this.width * this.height;

    this.Field = new Array(this.area);
  }
}
