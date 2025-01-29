function Peg(numOfRings = 5) {
  this.rings = [...Array(numOfRings)].map((_, index) => {
    return numOfRings - index;
  });
}

function Board(numOfPegs = 3) {
  const numOfRings = 5;

  this.pegs = {
    1: new Peg(),
  };

  Array.from({ length: numOfPegs - 1 }).map((_, index) => {
    this.pegs[index + 2] = new Peg(0);
  });

  this.moveDisc = function (start, end) {
    const startRings = this.pegs[start].rings;
    const endRings = this.pegs[end].rings;

    const startRing = startRings[startRings.length - 1];
    let endRing = endRings[endRings.length - 1];
    if (endRings.length === 0) {
      endRing = numOfRings;
    }
    if (startRing < endRing) {
      startRings.pop();
      endRings.push(startRing);
      this.printBoard(messages.success);
    } else {
      this.printBoard(messages.unsuccess);
    }
  };

  this.loopGame = function (pegNumsStr) {
    while (!this.winner(numOfRings)) {
      let start;
      let quit;
      while (!start && !quit || start < 0 || start > numOfRings) {
        start = prompt(`Enter ${pegNumsStr} to move ring from:
    \n(enter 'quit' to quit.)`);
        start === 'quit' ? (quit = true) : null;
      }
      let end;
      while (!end && !quit || end < 0 || end > numOfRings) {
        end = prompt("Move peg to:\n(enter 'quit' to quit.)");
        end === 'quit' ? (quit = true) : null;
      }

      if (quit) {
        console.log('You quit.');
        break;
      }

      this.moveDisc(start, end);
    }
    this.winner(numOfRings);
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

  this.winner = function (numOfRings) {
    const finalPeg = this.pegs[numOfPegs].rings;

    if (finalPeg.length === numOfRings) {
      const winner = finalPeg
        .map((element, index) => {
          return element === numOfRings - index ? true : false;
        })
        .every((v) => v);

      if (winner) {
        console.log(messages.won);
        return true;
      }
    }
    return false;
  };
}

const messages = {
  start: `Enter number of pegs to play with:
    \nLeave blank for default, which is 3`,
  won: 'You won!',
  success: `That move was successful, board is \x1b[35mnow\x1b[0m:`,
  unsuccess: `You cannot move a larger disc on top \x1b[35mof\x1b[0m
      a smaller one, board is \x1b[35mstill\x1b[0m:`,
};

const startGame = function () {
  let numOfPegs = parseInt(prompt(messages.start));
  if (!numOfPegs || numOfPegs < 3 || numOfPegs > 6) {
    numOfPegs = 3;
  }

  const game = new Board(numOfPegs);
  const pegNumsStr = [...Array(numOfPegs)]
    .reduce((acc, _, i) => {
      acc.push(i + 1);
      return acc;
    }, [])
    .join(' ,');

  game.printBoard();
  game.loopGame(pegNumsStr);

};

startGame();
