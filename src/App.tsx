import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Peg from './components/Peg';
import Overlay from './pages/Overlay';
import Board from './pages/Board';
import startGame from './gameLogic';
import type { BoardInstance } from './gameLogic';

function App() {
  const [started, setStarted] = useState(false);
  const [pegsJsx, setPegsJsx] = useState<React.ReactNode[]>([]);
  const [gameBoard, setGameBoard] = useState<BoardInstance | undefined>();
  const [clickCount, setClickCount] = useState<number>(0);
  // const [firstPeg, setFirstPeg] = useState<number | null>();

  const messages = {
    first: 'Click ring to move',
    second: 'Click peg to move ring to',
  };

  const [message, setMessage] = useState(messages.first);

  const handleClick = (key: number): void => {
    if (clickCount === 0) {
      console.log(0);
    } else if (clickCount === 1) {
      console.log(1);
    }

    // setClickCount((prev) => {
    //   const newCount = prev + 1;
    //   if (newCount === 1) {
    //     console.log('first click');
    //     setMessage(messages.second);
    //     setFirstPeg(key);
    //   }
    //   if (newCount === 2) {
    //     console.log('second click');
    //     setClickCount(0);
    //     const secondPeg = key;
    //     if (gameBoard && firstPeg && secondPeg) {
    //       const message = gameBoard.moveDisc(firstPeg, secondPeg);
    //       setMessage(message + '. ' + messages.first);
    //     }
    //   }
    //   return newCount;
    // });
  };

  const handleStart = (numOfPegs: number) => {
    setStarted(!started);
    const game = startGame(numOfPegs);
    setGameBoard(game);
    setClickCount(0);
    setMessage(messages.first);
  };

  useEffect(() => {
  if (gameBoard) {
    const newPegsJsx = Object.keys(gameBoard.pegs).map((key) => (
      <Peg
        key={key}
        pegNum={parseInt(key)}
        rings={gameBoard.pegs[Number(key)].rings}
        handleClick={handleClick}
      />
    ));
    setPegsJsx(newPegsJsx);
  }
  }, [gameBoard]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {started ? (
        <Board message={message}>{pegsJsx}</Board>
      ) : (
        <Overlay>
          <Form submitProp={handleStart} />
        </Overlay>
      )}
    </div>
  );
}

export default App;
