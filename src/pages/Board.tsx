import React from 'react';

interface GameProps {
  children: React.ReactNode;
  message: string;
}

export default function Game({
  children,
  message,
}: GameProps): React.ReactNode {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-lg justify-center">{children}</div>
      <div className="w-xl bg-amber-700 rounded-xl p-2"></div>
      <p className='mt-5'>{message}</p>
    </div>
  );
}
