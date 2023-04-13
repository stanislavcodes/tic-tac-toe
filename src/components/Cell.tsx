import { useState } from 'react';
import OHoverSVG from '../assets/icon-o-outline.svg';
import OSVG from '../assets/icon-o.svg';
import XHoverSVG from '../assets/icon-x-outline.svg';
import XSVG from '../assets/icon-x.svg';
import { Mark } from '../enums/Mark';
import { Turn } from '../types/Turn';

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
      className="flex h-full w-full items-center justify-center rounded-lg bg-gray text-2xl"
      onClick={handleFieldClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!value && isHover && (
        <img
          src={turn === Mark.Circle ? OHoverSVG : XHoverSVG}
          alt={`${turn} mark`}
        />
      )}
      {value === Mark.Circle && <img src={OSVG} alt="Circle mark" />}
      {value === Mark.Cross && <img src={XSVG} alt="Cross mark" />}
    </button>
  );
};

export default Cell;
