import { Mark } from '../enums/Mark';

interface CellProps {
  id: number;
  value: Mark;
  handleCellClick: (idx: number) => void;
}

const Cell = ({ id, value, handleCellClick }: CellProps) => {
  const handleFieldClick = () => {
    console.log(`value: ${value}, id: ${id}`);

    if (!value) {
      handleCellClick(id);
    }
  };

  return (
    <button
      className=" h-full w-full rounded-lg bg-gray text-2xl"
      onClick={handleFieldClick}
    >
      {value !== Mark.Empty && value.toString()}
    </button>
  );
};

export default Cell;
