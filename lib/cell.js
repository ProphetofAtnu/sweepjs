module.export = class Cell {
  constructor(isMine = false) {
    this.Mine = isMine;
    this.Revealed = false;
    this.Flagged = false;
    this.Proximity = 0;
  }

  // Reveal reveals the cell, and if the cell is a mine, return true
  Reveal() {
    if (!(this.Revealed || this.Flagged)) {
      if (this.Mine) {
        return true;
      } else {
        this.Revealed = true;
        return false;
      }
    }
    return false;
  }
  // Flag toggles the flagged state of the cell
  Flag() {
    this.Flagged = !this.Flagged;
  }
};
