const messages = {
  prompt: `Enter number of pegs to play with.
  Numbers between 3 and 5 are valid.\n
  Default is 3 pegs.`,
  moveDisc: `Move all the discs to a different peg to win.\n
Use command moveDisc() to move rings.\n
Example: moveDisc(1, 3) will move the top disc from peg 1 to peg 3.\n
You cannot move a larger ring on top of one which is smaller.\n`,
  noRings: `There are no rings on the peg you selected.`,
  won: `You won! Reseting to a new board in 5 seconds.`,
  success: `That move was successful, board is \x1b[35mnow\x1b[0m:`,
  nosuccess: `You cannot move a larger disc on top \x1b[35mof\x1b[0m a smaller one.`,
};

class Board {
  constructor(numOfRings = 3) {
    this.numOfRings = numOfRings;
    this.numOfPegs = prompt(messages['prompt']);
    if (!this.validPegInput(this.numOfPegs)) {
      this.numOfPegs = 3;
    }
    this.build();
  }

  validPegInput = (numOfPegs) => {
    const regex = /^[3-5]$/;
    if (!regex.test(numOfPegs)) {
      return false;
    }
    return true;
  };

  build = () => {
    this.pegs = {
      1: [...Array(this.numOfRings)].map((_, index) =>
        parseInt(this.numOfRings - index)
      ),
    };
    Array.from({ length: this.numOfPegs - 1 }).forEach((_, index) => {
      this.pegs[index + 2] = [];
    });
    this.printToConsole(messages['moveDisc']);
  };

  printToConsole = (string) => {
    console.clear();
    const toPrint = [];
    if (string) {
      toPrint.push(string);
    }
    toPrint.push('The state of the board is currently:');
    for (const key in this.pegs) {
      const str = this.pegs[key].reduce((str, current) => {
        str += current;
        return str;
      }, '');
      toPrint.push(`--- ${str}`);
    }
    console.log(toPrint.join('\n'));
  };

  // returns undefined because there is no return value
  // is there an elegant way to handle this situation?
  moveDisc = (start, end) => {
    if (!this.validDiscInput(start, end)) {
      return;
    }
    const startPeg = this.pegs[start];
    const endPeg = this.pegs[end];
    const startRing = startPeg[startPeg.length - 1];
    if (!this.validMove(startPeg, endPeg)) {
      return;
    }
    this.makeMove(startPeg, endPeg, startRing);
  };

  makeMove = (startPeg, endPeg, startRing) => {
    startPeg.pop();
    endPeg.push(startRing);
    if (this.winner()) {
      this.printToConsole(messages['won']);
      setTimeout(() => {
        this.resetBoard();
      }, 5000);
    } else {
      this.printToConsole(messages['success']);
    }
  };

  // validates input, debugged
  validDiscInput = (start, end) => {
    if (
      start < 1 ||
      end < 1 ||
      start > this.numOfPegs ||
      end > this.numOfPegs ||
      start === end
    ) {
      this.printToConsole(messages['moveDisc']);
      return false;
    }
    return true;
  };

  // validates the move, debugged
  validMove = (startPeg, endPeg) => {
    let endRing;
    if (endPeg.length === 0) {
      endRing = this.numOfRings;
    } else {
      endRing = endPeg[endPeg.length - 1];
    }
    if (startPeg.length === 0) {
      this.printToConsole(messages['noRings']);
      return false;
    }
    if (startPeg[startPeg.length - 1] > endRing) {
      this.printToConsole(messages['nosuccess']);
      return false;
    }
    return true;
  };

  // checks ALL pegs other than first for winner, debugged
  winner = () => {
    return Object.values(this.pegs)
      .slice(1)
      .some((peg) => peg.length === this.numOfRings);
  };

  resetBoard = () => {
    this.pegs = [];
    this.build();
  };
}

const game = new Board();
const moveDisc = game.moveDisc;
