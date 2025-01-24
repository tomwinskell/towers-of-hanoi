function Peg(numOfRings = 0) {
  this.rings = Array(numOfRings)
    .fill(0)
    .map((_, index) => {
      return numOfRings - index;
    });
}

function Board(numOfPegs = 3) {
  const numOfRings = 5

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
    const finalPeg = [5,4,3,2,1];
    

    const correct = finalPeg.map((element, index) => {
      
    })
    console.log(finalPeg);
  }
}

const game = new Board(3);

game.moveDisc(1, 2);
game.moveDisc(2, 3);

game.winner();
