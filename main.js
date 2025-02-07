const messages = {
  prompt: `
  Enter number of pegs to play with.\n
  Numbers between 3 and 5 are valid.\n
  Default is 3 pegs.`,
  moveDisc: `
  Move all the discs to a different\n
  peg to win.\n
  Use command moveDisc() to move rings.\n
  Example: moveDisc(1, 3) will move the top disc\n
  from peg 1 to peg 3.\n
  You cannot move a larger ring on top of one\n
  which is smaller.`,
  noRings: `There are no rings on the peg you\n
  selected.`,
  won: `You won!`,
  success: `That move was successful, board is \x1b[35mnow\x1b[0m:`,
  unsuccess: `You cannot move a larger disc on top \x1b[35mof\x1b[0m a smaller one.`,
};

class Peg {
  constructor(numOfRings) {
    this.rings = [...Array(numOfRings)].map((_, index) => numOfRings - index);
  }
}

class Board {
  constructor(numOfRings = 5) {
    this.numOfRings = numOfRings;
    this.numOfPegs = prompt(messages['prompt']);
    if (!this.numOfPegsIsValid(this.numOfPegs)) {
      this.numOfPegs = 3;
    }
    this.build();
  }

  numOfPegsIsValid(numOfPegs) {
    if (numOfPegs.length != 1) {
      return false;
    }
    if (!numOfPegs > 2 && numOfPegs < 4) {
      return false;
    }
    return true;
  }

  build() {
    this.pegs = { 1: new Peg(this.numOfRings) };
    Array.from({ length: this.numOfPegs - 1 }).map((_, index) => {
      this.pegs[index + 2] = new Peg(0);
    });
    console.log(messages['moveDisc']);
    this.printBoardToConsole();
  }

  printBoardToConsole() {
    let toPrint = ['The state of the board is currently:'];
    for (const key in this.pegs) {
      const str = this.pegs[key].rings.reduce((str, current) => {
        str += current;
        return str;
      }, '');
      toPrint.push(`--- ${str}`);
    }
    return toPrint.join('\n');
  }

  moveDisc(start, end) {
    if (this.discInputIsValid(start)) {
      return messages['moveDisc'];
    }
    const startPeg = this.pegs[start]['rings'];
    const endPeg = this.pegs[end]['rings'];
    if (startPeg.length === 0) {
      return messages['noRings'];
    }

    const startRing = startPeg[startPeg.length - 1];
    let endRing = endPeg[endPeg.length - 1];

    if (endPeg.length === 0) {
      endRing = this.numOfRings;
    }

    if (startRing > endRing) {
      return messages['unsuccess'];
    }
    this.modifyBoard(startPeg, endPeg, startRing);

    if (this.winner()) {
      return messages['won'];
    }
    return messages['success'];
  }

  modifyBoard(startPeg, endPeg, startRing) {
    startPeg.pop();
    endPeg.push(startRing);
  }

  discInputIsValid(number) {
    if (number.length != 1) {
      return false;
    }
    if (number < 1 || number > this.numOfPegs) {
      return false;
    }
    if (start === end) {
      return false;
    }
    return true;
  }

  winner() {
    Object.entries(this.pegs)
      .slice(1)
      .forEach(([key, value]) => {
        if (value.length === this.numOfRings) {
          return true;
        }
      });
    return false;
  }
}

(() => {
  console.log(messages['prompt']);
})();

const game = new Board();

const moveDisc = (start, end) => {
    const message = game.moveDisc(start, end);
    const board = game.printBoardToConsole();
};

