import { useEffect,useMemo,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cell from '../components/Cell';
import { Logo } from '../components/Logo';
import { MarkIcon } from '../components/MarkIcon';
import { RoundOverPopup } from '../components/RoundOverPopup';
import { ScoreBoard } from '../components/ScoreBoard';
import { useGameContext } from '../contexts/useGameContext';
import { Mark } from '../enums/Mark';
import { RoundResult } from '../enums/RoundResult';
import { checkRound,getCpuMove } from '../helpers/helpers';
import { useSessionStorageScore } from '../hooks/useSessionStorageScore';
import { type PlayersMark } from '../types/PlayersMark';

const START_MARKS = Array(9).fill(Mark.Empty);

enum Mode {
  Player = 'player',
  Cpu = 'cpu',
}

const getMode = (mode: string): Mode | null => {
  switch (mode) {
    case Mode.Player:
      return Mode.Player;
    case Mode.Cpu:
      return Mode.Cpu;
    default:
      return null;
  }
};

export const Playground = () => {
  const { pathname } = useLocation();
  const gameMode = getMode(pathname.slice(1));
  const [turn, setTurn] = useState<PlayersMark>(Mark.Cross);
  const [marks, setMarks] = useState(START_MARKS);
  const [winner, setWinner] = useState<Mark.Circle | Mark.Cross | null>(null);
  const [scores, setScores] = useSessionStorageScore();

  const addMark = (id: number, newMark: PlayersMark) => {
    setMarks(
      marks.map((mark, idx) => {
        if (id === idx) {
          return newMark;
        }

        return mark;
      }),
    );
  };

  const {
    firstPlayersMark,
    secondPlayersMark,
    isPopupOpened,
    setIsPopupOpened,
  } = useGameContext();

  const resetGame = () => {
    setTurn(Mark.Cross);
    setMarks(START_MARKS);
  };

  const changeTurn = () => {
    setTurn(turn === Mark.Cross ? Mark.Circle : Mark.Cross);
  };

  const makeCpuMove = () => {
    const moveIndex = getCpuMove(marks, secondPlayersMark);
    setTimeout(() => addMark(moveIndex, secondPlayersMark), 300);
    changeTurn();
  };

  const handleCellClick = (id: number) => {
    addMark(id, gameMode === Mode.Cpu ? firstPlayersMark : turn);
    changeTurn();
  };

  const handleRoundPopupClose = () => {
    setIsPopupOpened(false);
    setWinner(null);
    resetGame();
  };

  const roundResult = useMemo(() => {
    return checkRound(marks);
  }, [marks]);

  useEffect(() => {
    if (!roundResult && gameMode === Mode.Cpu && turn === secondPlayersMark) {
      makeCpuMove();
    }
  }, [turn]);

  useEffect(() => {
    if (roundResult) {
      setTimeout(() => setIsPopupOpened(true), 300);

      if (roundResult === RoundResult.Circle) {
        setWinner(Mark.Circle);
        setScores({ ...scores, circle: scores.circle + 1 });
      } else if (roundResult === RoundResult.Cross) {
        setWinner(Mark.Cross);
        setScores({ ...scores, cross: scores.cross + 1 });
      } else {
        setScores({ ...scores, ties: scores.ties + 1 });
      }
    }
  }, [roundResult]);

  return (
    <>
      <div className="flex w-80 flex-col gap-6 max-[325px]:w-72 sm:w-2/3 md:w-1/2 xl:w-1/3">
        <header className="grid h-14 w-full grid-cols-[1fr_2fr_1fr] items-center justify-between">
          <Logo heightClass="h-8 md:h-3/4" />

          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <MarkIcon mark={turn} outline={false} heightClass="h-6" />
            <h1 className="justify-self-center font-bold">TURN</h1>
          </div>
          <button
            className="sm:text-md h-8 rounded-md bg-primary px-2  text-xs font-bold uppercase text-dark"
            onClick={resetGame}
            disabled={isPopupOpened}
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

        <ScoreBoard {...scores} />
      </div>

      {isPopupOpened && (
        <>
          <RoundOverPopup winner={winner} closePopup={handleRoundPopupClose} />
        </>
      )}
    </>
  );
};
