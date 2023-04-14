import { useEffect,useMemo,useState } from 'react';
import Cell from '../components/Cell';
import { Logo } from '../components/Logo';
import { MarkIcon } from '../components/MarkIcon';
import { RoundOverPopup } from '../components/RoundOverPopup';
import { ScoreBoard } from '../components/ScoreBoard';
import { useGameContext } from '../contexts/useGameContext';
import { Mark } from '../enums/Mark';
import { checkWinner } from '../helpers/helpers';
import { type Turn } from '../types/Turn';

const START_MARKS = Array(9).fill(Mark.Empty);

export const Playground = () => {
  // const [firstPlayersMark, setFirstPlayersMark] = useState(second)
  const [turn, setTurn] = useState<Turn>(Mark.Cross);
  const [marks, setMarks] = useState(START_MARKS);
  const [isRoundOver, setIsRoundOver] = useState(false);
  // const [winner, setWinner] = useState<Turn | null>(null);
  const { firstPlayersMark } = useGameContext();

  const resetGame = () => {
    setTurn(Mark.Cross);
    setMarks(START_MARKS);
  };

  const changeTurn = () => {
    const newTurn = turn === Mark.Cross ? Mark.Circle : Mark.Cross;
    setTurn(newTurn);
  };

  const handleCellClick = (id: number) => {
    const newMarks = marks.map((mark, idx) => {
      if (id === idx) {
        return turn;
      }

      return mark;
    });

    changeTurn();

    setMarks(newMarks);
  };
  
  const handleRoundPopupClose = () => {
    setIsRoundOver(false);
    resetGame();
  };

  const winner = useMemo(() => {
    return checkWinner(marks);
  }, [marks]);

  useEffect(() => {
    if (winner) {
      setIsRoundOver(true);
    }
  
  }, [winner])
  

  return (
    <>
      <div className="flex w-80 flex-col gap-6 max-[325px]:w-72 sm:w-2/3 md:w-1/2 xl:w-1/3">
        <header className="grid h-14 w-full grid-cols-[1fr_2fr_1fr] items-center justify-between">
          <Logo heightClass="h-8 md:h-3/4" />

          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            {!winner && (
              <MarkIcon mark={turn} outline={false} heightClass="h-6" />
            )}
            <h1 className="justify-self-center font-bold">
              {winner ? `${winner.toUpperCase()} WON!` : 'TURN'}
            </h1>
          </div>
          <button
            className="sm:text-md h-8 rounded-md bg-primary px-2  text-xs font-bold uppercase text-dark"
            onClick={resetGame}
          >
            Restart
          </button>
        </header>

        <div className="container grid aspect-square w-full grid-cols-3 grid-rows-3 items-center justify-items-center gap-4">
          {marks.map((mark, idx) => (
            <Cell
              key={idx}
              id={idx}
              value={mark}
              turn={turn}
              handleCellClick={handleCellClick}
            />
          ))}
        </div>

        <ScoreBoard cross={3} ties={2} circle={1} />
      </div>

      {isRoundOver && (
        <>
          <RoundOverPopup
            winner={winner}
            closePopup={handleRoundPopupClose}
          />
        </>
      )}
    </>
  );
};
