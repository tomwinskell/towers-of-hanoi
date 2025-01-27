import React from 'react';

interface GameProps {
  children: React.ReactNode;
}

export default function Game({ children }: GameProps): React.ReactNode {
  return (
    <div className="">
      <div className="flex w-lg justify-center">{children}</div>
      <div className="w-xl bg-amber-700 rounded-xl p-2"></div>
    </div>
  );
}
