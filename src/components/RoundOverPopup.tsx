import { Link } from 'react-router-dom';
import { Mark } from '../enums/Mark';
import { PopupLayout } from '../layouts/PopupLayout';
import { MarkIcon } from './MarkIcon';
import { PlayersMark } from '../types/PlayersMark';

interface RoundOverPopupProps {
  winner: PlayersMark | null;
  closePopup: () => void;
}

const headingStyles =
  'text-center max-[370px]:text-xl text-2xl font-bold uppercase text-gray';

export const RoundOverPopup = ({ winner, closePopup }: RoundOverPopupProps) => {
  return (
    <PopupLayout>
      {!winner ? (
        <p className={headingStyles}>Round Tied</p>
      ) : (
        <>
          {/* <h2 className={headingStyles}>Pick your mark</h2> */}
          <div className="flex items-center justify-center gap-4 font-bold uppercase">
            <MarkIcon outline={false} mark={winner} heightClass="h-12" />
            <h1
              className={
                winner === Mark.Cross ? 'text-primary' : 'text-secondary'
              }
            >
              Takes the round
            </h1>
          </div>
        </>
      )}

      <div className="flex gap-4">
        <Link
          to="/"
          className="flex h-10 grow items-center justify-center rounded-xl bg-secondary px-2 text-xl font-bold uppercase text-dark shadow-md transition-colors hover:bg-secondary/80 focus:bg-primary max-[370px]:text-sm sm:h-12"
        >
          Quit
        </Link>
        <button
          className='className="flex focus:bg-primary" h-10 grow items-center justify-center rounded-xl bg-primary px-2 text-xl font-bold uppercase text-dark shadow-md transition-colors hover:bg-primary/80 max-[370px]:text-sm :h-12'
          onClick={closePopup}
        >
          Next Round
        </button>
      </div>
    </PopupLayout>
  );
};
