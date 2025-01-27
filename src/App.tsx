import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Peg from './components/Peg';
import Overlay from './pages/Overlay';
import Game from './pages/Game';

function App() {
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    console.log("I'm a peg");
  };

  const handleSubmit = () => {
    setStarted(!started);
  };

  type IndexedObject = {
    [key: number]: { rings: number[] };
  };

  const pegs: IndexedObject = {
    1: { rings: [5] },
    2: { rings: [4, 3] },
    3: { rings: [1, 2] },
  };

  const pegsJsx: React.ReactNode[] = [];

  for (const key in pegs) {
    pegsJsx.push(
      <Peg key={key} rings={pegs[key].rings} handleClick={handleClick} />
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {started ? (
        <Game>{pegsJsx}</Game>
      ) : (
        <Overlay>
          <Form handleSubmit={handleSubmit} />
        </Overlay>
      )}
    </div>
  );
}

export default App;
