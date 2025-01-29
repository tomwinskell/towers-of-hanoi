import React from 'react';

interface WinnerProps {
  message: string;
  resetGame: () => void;
}

export default function Winner({
  message,
  resetGame,
}: WinnerProps): React.ReactNode {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-3xl mb-5">{message}</h1>
      <button
        onClick={resetGame}
        className="bg-blue-500 text-xl rounded-2xl px-8 py-4"
      >
        Play again
      </button>
    </div>
  );
}
