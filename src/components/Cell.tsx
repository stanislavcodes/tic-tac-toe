import { Mark } from '../enums/Mark';
import XSVG from '../assets/icon-x.svg';
import OSVG from '../assets/icon-o.svg';
import XHoverSVG from '../assets/icon-x-outline.svg';
import OHoverSVG from '../assets/icon-o-outline.svg';
import { useState } from 'react';
import { Turn } from '../types/Turn';
import classnames from 'classnames';

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
      className="flex justify-center items-center h-full w-full rounded-lg bg-gray text-2xl"
      onClick={handleFieldClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!value && isHover && (
        <img src={turn === Mark.O ? OHoverSVG : XHoverSVG} alt={`${turn} mark`} />
      )}
      {value === Mark.O && (
        <img src={OSVG} alt="X mark" />
      )}
      {value === Mark.X && (
        <img src={XSVG} alt="X mark" />
      )}
    </button>
  );
};

export default Cell;
