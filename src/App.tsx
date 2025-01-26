import './App.css';
import Form from './components/Form';
import Peg from './components/Peg';

function App() {
  const handleClick = () => {
    console.log("I'm a peg");
  };

  type IndexedObject = {
    [key: number]: { rings: number[] };
  };

  const pegs: IndexedObject = {
    1: { rings: [5, 4] },
    2: { rings: [3, 2] },
    3: { rings: [1] },
  };

  const pegsJsx: React.ReactNode[] = [];

  for (const key in pegs) {
    pegsJsx.push(
      <Peg key={key} rings={pegs[key].rings} handleClick={handleClick} />
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-5">
        <Form />
      </div>
      <div className="flex w-lg justify-center">{pegsJsx}</div>
      <div className="w-xl bg-amber-700 rounded-xl p-2"></div>
    </div>
  );
}

export default App;
