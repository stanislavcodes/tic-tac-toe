import { useState } from 'react';
import { Mark } from '../enums/Mark';
import { type Turn } from '../types/Turn';
import { MarkIcon } from './MarkIcon';

interface CellProps {
  id: number;
  value: Mark;
  turn: Turn;
  handleCellClick: (idx: number) => void;
}

const Cell = ({ id, value, turn, handleCellClick }: CellProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleFieldClick = () => {
    console.log(`value: ${value}, id: ${id}`);

    if (!value) {
      handleCellClick(id);
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      className="flex h-full w-full items-center justify-center rounded-lg bg-dark text-2xl"
      onClick={handleFieldClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!value && isHover && (
        <MarkIcon outline={true} mark={turn} heightClass="h-2/3" />
      )}

      {value && <MarkIcon outline={false} mark={value} heightClass="h-2/3" />}
    </button>
  );
};

export default Cell;
