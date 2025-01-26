import Ring from './Ring';

interface PegProps {
  rings: number[];
  handleClick: () => void;
}

export default function Peg({ rings, handleClick }: PegProps) {
  return (
    <div
      className="h-40 relative w-1/3 flex flex-col-reverse items-center justify-start"
      onClick={() => handleClick()}
    >
      {rings.map((num) => {
        return <Ring key={num} ringNum={num} />;
      })}
      <div className="absolute h-full bg-amber-700 rounded-t-lg p-2"></div>
    </div>
  );
}
