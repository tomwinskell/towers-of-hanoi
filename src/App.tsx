import './App.css';

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-5">
        <form className="flex flex-col" action="">
          <label htmlFor="">
            How many pegs would you like to play with today?
          </label>
          <input className="border rounded-xl" type="text" />
        </form>
      </div>
      <div className="flex w-lg">
        <div className="h-40 relative w-1/3 flex flex-col items-center justify-end">
          <div className="z-1 w-2/6 bg-purple-500 rounded-xl text-white font-bold text-center p-0.5">
            1
          </div>
          <div className="z-1 w-3/6 bg-green-500 rounded-xl text-white font-bold text-center p-0.5">
            2
          </div>
          <div className="z-1 w-4/6 bg-blue-500 rounded-xl text-white font-bold text-center p-0.5">
            3
          </div>
          <div className="z-1 w-5/6 bg-yellow-500 rounded-xl text-white font-bold text-center p-0.5">
            4
          </div>
          <div className="z-1 w-full bg-red-500 rounded-xl text-white font-bold text-center p-0.5">
            5
          </div>
          <div className="absolute h-full bg-amber-700 rounded-t-lg p-2"></div>
        </div>
        <div className="z-1 h-40 relative w-1/3 flex flex-col items-center justify-end">
          {/* <div className="w-full bg-red-500">p</div> */}
          <div className="absolute h-full bg-amber-700 rounded-t-lg p-2"></div>
        </div>
        <div className="h-40 relative w-1/3 flex flex-col items-center justify-end">
          {/* <div className="w-full bg-red-500">p</div> */}
          <div className="absolute h-full bg-amber-700 rounded-t-lg p-2"></div>
        </div>
      </div>
      <div className="w-xl bg-amber-700 rounded-xl p-3"></div>
    </div>
  );
}

export default App;
