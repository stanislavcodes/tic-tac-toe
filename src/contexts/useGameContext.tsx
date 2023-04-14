import {
createContext,
Dispatch,
FC,
ReactNode,
SetStateAction,
useContext,
useState
} from 'react';
import { Mark } from '../enums/Mark';
import { PlayersMark } from '../types/PlayersMark';

interface GameContextProps {
  isPopupOpened: boolean;
  setIsPopupOpened: Dispatch<SetStateAction<boolean>>;
  firstPlayersMark: PlayersMark;
  setFirstPlayersMark: Dispatch<SetStateAction<PlayersMark>>;
  secondPlayersMark: PlayersMark;
  setSecondPlayersMark: Dispatch<SetStateAction<PlayersMark>>;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContextProvider: FC<GameContextProviderProps> = ({
  children,
}) => {
  const [firstPlayersMark, setFirstPlayersMark] = useState<PlayersMark>(
    Mark.Cross,
  );
  const [secondPlayersMark, setSecondPlayersMark] = useState<PlayersMark>(
    Mark.Cross,
  );
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  return (
    <GameContext.Provider
      value={{
        isPopupOpened,
        setIsPopupOpened,
        firstPlayersMark,
        setFirstPlayersMark,
        secondPlayersMark,
        setSecondPlayersMark,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (gameContext === undefined) {
    throw new Error('useGameContext must be inside a GameContext');
  }

  return gameContext;
};
