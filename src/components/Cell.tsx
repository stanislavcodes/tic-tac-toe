import { useEffect,useRef,useState } from 'react';
import { useGameContext } from '../contexts/useGameContext';
import { Mark } from '../enums/Mark';
import { type PlayersMark } from '../types/PlayersMark';
import { MarkIcon } from './MarkIcon';

interface CellProps {
  id: number;
  value: Mark;
  turn: PlayersMark;
  handleCellClick: (idx: number) => void;
}

const Cell = ({ id, value, turn, handleCellClick }: CellProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    console.log(document.activeElement === ref.current, id);
  });

  const { isPopupOpened } = useGameContext();
  const isTouchDevice = 'ontouchstart' in document.documentElement;

  const handleFieldClick = () => {
    if (!value) {
      handleCellClick(id);
    }
  };

  const showOutlined = () => {
    setIsPreview(true);
  };

  const hideOutlined = () => {
    setIsPreview(false);
  };

  return (
    <button
      className="flex h-full w-full items-center justify-center rounded-lg bg-dark text-2xl"
      onClick={handleFieldClick}
      onMouseEnter={showOutlined}
      onMouseLeave={hideOutlined}
      onFocus={showOutlined}
      onBlur={hideOutlined}
      ref={ref}
      disabled={isPopupOpened}
    >
      {!value && isPreview && !isTouchDevice && (
        <MarkIcon outline={true} mark={turn} heightClass="h-2/3" />
      )}

      {value && <MarkIcon outline={false} mark={value} heightClass="h-2/3" />}
    </button>
  );
};

export default Cell;
