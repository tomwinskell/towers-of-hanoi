import { useEffect, useRef, useState } from 'react';
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
  const clickCount = useRef(0);
  const firstPeg = useRef<number | null>(null);
  // const [firstPeg, setFirstPeg] = useState<number | null>();

  const messages = {
    first: 'Click ring to move',
    second: 'Click peg to move ring to',
  };

  const [message, setMessage] = useState(messages.first);

  const handleClick = (key: number): void => {
    if (clickCount.current === 0) {
      clickCount.current++;
      firstPeg.current = key;
    } else if (clickCount.current === 1) {
      clickCount.current = 0;
      console.log(firstPeg.current, key);
    }
  };

  const handleStart = (numOfPegs: number) => {
    setStarted(!started);
    const game = startGame(numOfPegs);
    setGameBoard(game);

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
