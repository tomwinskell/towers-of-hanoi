interface RingProps {
  ringNum: number;
}

export default function Ring({ ringNum }: RingProps): React.ReactNode {
  const rings = {
    1: 'z-1 w-2/7 bg-blue-500 rounded-xl text-white font-bold text-center p-0.5',
    2: 'z-1 w-3/7 bg-green-500 rounded-xl text-white font-bold text-center p-0.5',
    3: 'z-1 w-4/7 bg-purple-500 rounded-xl text-white font-bold text-center p-0.5',
    4: 'z-1 w-5/7 bg-red-500 rounded-xl text-white font-bold text-center p-0.5',
    5: 'z-1 w-6/7 bg-yellow-500 rounded-xl text-white font-bold text-center p-0.5',
  };

  return <div className={rings[ringNum as keyof typeof rings]}>{ringNum}</div>;
}
