class Peg {
  rings: number[];

  constructor(numOfRings: number = 0) {
    this.rings = Array(numOfRings)
      .fill(0)
      .map((_, index) => numOfRings - index);
  }
}

export type BoardInstance = InstanceType<typeof Board>;
export type PegsType = { [key: number]: Peg };

class Board {
  pegs: PegsType;
  numOfRings: number;
  numOfPegs: number;

  constructor(numOfPegs: number = 3, numOfRings: number = 5) {
    this.numOfRings = numOfRings;
    this.numOfPegs = numOfPegs;
    this.pegs = {
      1: new Peg(numOfRings),
    };

    Array(numOfPegs - 1)
      .fill(0)
      .map((_, index) => {
        this.pegs[index + 2] = new Peg();
      });
  }

  moveDisc = (start: number, end: number) => {
    const startRings = this.pegs[start].rings;
    const endRings = this.pegs[end].rings;

    const startRing = startRings[startRings.length - 1];
    let endRing = endRings[endRings.length - 1];

    if (endRings.length === 0) {
      endRing = this.numOfRings;
    }

    if (startRing < endRing) {
      startRings.pop();
      endRings.push(startRing);
      return `${startRing} moved to peg ${end}.`;
    }

    return `Cannot move ${startRing} on top of ${endRing}`;
  };

  printBoard = () => {
    return this;
  };

  // winner = () => {
  //   const finalPeg = this.pegs[this.numOfPegs].rings;

  //   if (finalPeg.length < this.numOfRings) {
  //     return false;
  //   }

  //   const correct = finalPeg.map((element: number, index: number) => {
  //     return element === this.numOfRings - index ? true : false;
  //   });

  //   return correct.every((v: boolean) => v);
  // };
}

export default function startGame(numOfPegs: number = 3): Board {
  const game = new Board(numOfPegs);

  return game;
}
