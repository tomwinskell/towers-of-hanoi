import { useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Peg from './components/Peg';
import Overlay from './pages/Overlay';
import Board from './pages/Board';
import { startGame, moveDisc, checkWinner } from './gameLogic';
import type { BoardInstance } from './gameLogic';
import Winner from './components/Winner';

function App() {
  const [started, setStarted] = useState(true);
  const [winner, setWinner] = useState(true);
  const [gameBoard, setGameBoard] = useState<BoardInstance | undefined>();

  const clickCount = useRef(0);
  const firstPeg = useRef<number | undefined>();

  const messages = {
    first: 'Click ring to move',
    second: 'Click peg to move ring to',
    winner: 'You win!',
  };

  const [message, setMessage] = useState(messages.first);

  const handleClick = (key: number): void => {
    if (clickCount.current === 0) {
      clickCount.current++;
      firstPeg.current = key;
      setMessage(messages.second);
    } else if (clickCount.current === 1) {
      clickCount.current = 0;
      if (gameBoard && firstPeg.current) {
        const result = moveDisc(firstPeg.current!, key, gameBoard);
        if (result) {
          updateBoard({ ...result, key });
          if (checkWinner(gameBoard)) {
            setWinner(true);
          } else {
            setMessage(messages.first);
          }
        } else {
          setMessage(
            'Unable to move larger ring on top of smaller.' +
              ' ' +
              messages.first
          );
        }
      }
    }
  };

  interface updateBoardProps {
    startRings: number[];
    endRings: number[];
    key: number;
  }

  const updateBoard = ({ startRings, endRings, key }: updateBoardProps) => {
    setGameBoard(
      (prevBoard) =>
        ({
          ...prevBoard!,
          pegs: {
            ...prevBoard!.pegs,
            [firstPeg.current!]: {
              rings: startRings,
            },
            [key]: { rings: endRings },
          },
        } as BoardInstance)
    );
  };

  const handleStart = (numOfPegs: number) => {
    setStarted(true);
    const game = startGame(numOfPegs);
    setGameBoard(game);
    setMessage(messages.first);
  };

  const resetGame = () => {
    setStarted(false);
    setWinner(false);
  };

  const buildPegsJsx = (gameBoard: BoardInstance) => {
    return Object.keys(gameBoard.pegs).map((key) => (
      <Peg
        key={key}
        pegNum={parseInt(key)}
        rings={gameBoard.pegs[Number(key)].rings}
        handleClick={handleClick}
      />
    ));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {started && !winner && (
        <Board message={message}>{gameBoard && buildPegsJsx(gameBoard)}</Board>
      )}
      {!started && !winner && (
        <Overlay>
          <Form submitProp={handleStart} />
        </Overlay>
      )}
      {started && winner && (
        <Overlay>
          <Winner message={messages.winner} resetGame={resetGame}></Winner>
        </Overlay>
      )}
    </div>
  );
}

export default App;
