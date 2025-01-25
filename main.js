function Peg(numOfRings = 0) {
  this.rings = Array(numOfRings)
    .fill(0)
    .map((_, index) => {
      return numOfRings - index;
    });
}

function Board(numOfPegs = 3) {
  const numOfRings = 5;

  this.pegs = {
    1: new Peg(numOfRings),
  };

  Array(numOfPegs - 1)
    .fill(0)
    .map((_, index) => {
      this.pegs[index + 2] = new Peg();
    });

  this.moveDisc = function (start, end) {
    const startRings = this.pegs[start].rings;
    const endRings = this.pegs[end].rings;

    const startRing = startRings[startRings.length - 1];
    let endRing = endRings[endRings.length - 1];

    if (endRings.length === 0) {
      endRing = numOfRings;
    }

    let moved = false;

    if (startRing < endRing) {
      startRings.pop();
      endRings.push(startRing);
      moved = true;
    }

    if (this.winner()) {
      return this.printBoard('You won!');
    }

    this.printBoard(
      moved
        ? 'That move was successful, board is \x1b[35mnow\x1b[0m:'
        : 'You cannot move a larger disc on top \x1b[35mof\x1b[0m a smaller one, board is \x1b[35mstill\x1b[0m:'
    );
  };

  this.printBoard = function (string = 'The board is currently:') {
    let toPrint = [];
    toPrint.push(string);
    for (const key in this.pegs) {
      let lineToPrint = '';
      this.pegs[key].rings.forEach((element) => {
        lineToPrint += element;
      });
      toPrint.push(`--- ${lineToPrint}`);
    }
    toPrint = toPrint.join('\n');
    console.log(toPrint);
  };

  this.winner = function () {
    // const finalPeg = this.pegs[numOfPegs].rings;
    const finalPeg = [5, 3, 2, 1];

    if (finalPeg.length < numOfRings) {
      return false;
    }

    const correct = finalPeg.map((element, index) => {
      return element === numOfRings - index ? true : false;
    });

    return correct.every((v) => v);
  };
}

const game = new Board(3);

const startGame = function () {
  let numOfPegs = prompt(
    'Enter number of pegs to play with:\nLeave blank for default, which is 3'
  );
  if (!numOfPegs) {
    numOfPegs = 3;
  }

  const game = new Board(numOfPegs);

  const pegNumsStr = Array(numOfPegs)
    .fill()
    .reduce((acc, _, i) => {
      acc.push(i + 1);
      return acc;
    }, [])
    .join(' ,');

  game.printBoard();

  let quit = false;
  while (!game.winner()) {
    let start;
    while (!start && !quit) {
      start = prompt(
        `Enter ${pegNumsStr} to move ring from:\n(enter 'quit' to quit.)`
      );
      start === 'quit' ? (quit = true) : null;
    }
    let end;
    while (!end && !quit) {
      end = prompt("Move peg to:\n(enter 'quit' to quit.)");
      start === 'quit' ? (quit = true) : null;
    }

    if (quit) {
      console.log('You quit.');
      break;
    }

    game.moveDisc(start, end);
  }
};

startGame();
