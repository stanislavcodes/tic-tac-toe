import { memo,useState } from 'react';
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

const Cell = memo(({ id, value, turn, handleCellClick }: CellProps) => {
  const [isPreview, setIsPreview] = useState(false);

  const { isPopupOpened } = useGameContext();

  const handleFieldClick = () => {
    console.log(`value: ${value}, id: ${id}`);

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
      disabled={isPopupOpened}
    >
      {!value && isPreview && (
        <MarkIcon outline={true} mark={turn} heightClass="h-2/3" />
      )}

      {value && <MarkIcon outline={false} mark={value} heightClass="h-2/3" />}
    </button>
  );
});

export default Cell;
