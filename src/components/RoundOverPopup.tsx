import { Link } from 'react-router-dom';
import { Mark } from '../enums/Mark';
import { PopupLayout } from '../layouts/PopupLayout';
import { PlayersMark } from '../types/PlayersMark';
import { MarkIcon } from './MarkIcon';
import { PopupLink } from './Popup/PopupLink';
import { PopupButton } from './Popup/PopupButton';


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
        <PopupLink text="Quit" to="/" />

        <PopupButton text="Next round" handleClick={closePopup}/>
      </div>
    </PopupLayout>
  );
};
