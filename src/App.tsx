import { useMemo, useState } from 'react';
import Logo from './assets/logo.svg';
import Cell from './components/Cell';
import { Mark } from './enums/Mark';
import { checkWinner } from './helpers/helpers';
import { type Turn } from './types/Turn';

function App() {
  const [turn, setTurn] = useState<Turn>(Mark.X);
  const [marks, setMarks] = useState(Array(9).fill(Mark.Empty));
  // const [winner, setWinner] = useState<Turn | null>(null);

  const changeTurn = () => {
    const newTurn = turn === Mark.X ? Mark.O : Mark.X;
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
        <div className="w-80 sm:w-2/3 xl:w-1/3 flex flex-col gap-4">
          <header className="flex w-full items-center justify-between">
            <img src={Logo} alt="" />
            <h1 className="font-bold">
              {winner ? `${winner.toUpperCase()} WON!` : `${turn.toUpperCase()} TURN`}
            </h1>
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
