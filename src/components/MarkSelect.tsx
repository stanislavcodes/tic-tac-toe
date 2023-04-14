import classNames from 'classnames';
import { useEffect,useState } from 'react';
import { Mark } from '../enums/Mark';
import { MarkIcon } from './MarkIcon';

const Option = ({
  selected,
  mark,
  toggleSelected,
}: {
  selected: boolean;
  mark: Omit<Mark, Mark.Empty>;
  toggleSelected: () => void;
}) => {
  return (
    <button
      className={classNames('flex grow justify-center rounded-md py-2 hover:bg-dark', {
        'bg-dark': selected,
      })}
      onClick={toggleSelected}
    >
      <MarkIcon outline={!selected} mark={mark} />
    </button>
  );
};

interface MarkSelectProps {
  handleMarkSelect: (mark: Omit<Mark, Mark.Empty>) => void;
}

export const MarkSelect = ({ handleMarkSelect }: MarkSelectProps) => {
  const [selected, setSelected] = useState(Mark.Cross);

  const toggleSelected = () => {
    setSelected(selected === Mark.Cross ? Mark.Circle : Mark.Cross);
  };

  useEffect(() => {
    handleMarkSelect(selected);
  }, [selected])
  

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-dark px-8 py-6">
      <h2 className="text-center text-xl font-bold uppercase">
        Pick your mark
      </h2>

      <div className="flex w-full gap-4 rounded-xl bg-bg p-4">
        <Option
          mark={Mark.Cross}
          selected={selected === Mark.Cross}
          toggleSelected={toggleSelected}
        />
        <Option
          mark={Mark.Circle}
          selected={selected === Mark.Circle}
          toggleSelected={toggleSelected}
        />
      </div>

      <p className="text-md text-center font-bold uppercase text-gray">
        Don't forget that <span className="text-primary">X</span> goes first!
      </p>
    </div>
  );
};
