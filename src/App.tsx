import { useMemo,useState } from 'react';
import OSVG from './assets/icon-o.svg';
import XSVG from './assets/icon-x.svg';
import Logo from './assets/logo.svg';
import Cell from './components/Cell';
import { Mark } from './enums/Mark';
import { checkWinner } from './helpers/helpers';
import { type Turn } from './types/Turn';

const START_MARKS = Array(9).fill(Mark.Empty);

function App() {
  const [turn, setTurn] = useState<Turn>(Mark.Cross);
  const [marks, setMarks] = useState(START_MARKS);
  // const [winner, setWinner] = useState<Turn | null>(null);

  const resetGame = () => {
    setTurn(Mark.Cross);
    setMarks(START_MARKS);
  }

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

  const winner = useMemo(() => {
    return checkWinner(marks);
  }, [marks]);

  return (
    <div className="app bg-dark text-light">
      <div className="container mx-auto flex h-screen w-full flex-col items-center justify-center ">
        <div className="flex w-80 flex-col gap-6 sm:w-2/3 md:w-1/2 xl:w-1/3">
          <header className="as grid h-8 w-full grid-cols-[max-content_1fr_max-content] items-center justify-between">
            <img className="h-full" src={Logo} alt="Tic Tac Toe Logo" />

            <div className="flex items-center justify-center gap-2">
              {!winner && (
                <img
                  className="h-6"
                  src={turn === Mark.Circle ? OSVG : XSVG}
                  alt={`${turn} mark`}
                />
              )}
              <h1 className="justify-self-center font-bold">
                {winner ? `${winner.toUpperCase()} WON!` : 'TURN'}
              </h1>
            </div>
            <button
              className="h-full w-24 rounded-md bg-blue font-bold uppercase text-yellow"
              onClick={resetGame}
            >
              Reset
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
        </div>
      </div>
    </div>
  );
}

export default App;
