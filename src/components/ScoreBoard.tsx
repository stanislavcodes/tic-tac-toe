import { Scores } from "../types/Scores";

interface ScoreCellProps {
  title: string;
  score: number;
  colorClass: string;
};

const ScoreCell = ({ title, score, colorClass }: ScoreCellProps) => {
  return (
    <div
      className={`h-full rounded-lg p-2 text-center font-bold uppercase text-dark ${colorClass}`}
    >
      <h4>{title}</h4>
      <h2 className="text-2xl">{score}</h2>
    </div>
  );
};

export const ScoreBoard = ({ cross, circle, ties }: Scores) => {
  return (
    <footer className="grid h-16 w-full grid-cols-3 items-center justify-between gap-4">
      <ScoreCell
        title="X"
        score={cross}
        colorClass="bg-primary"
      />

      <ScoreCell
        title="Ties"
        score={ties}
        colorClass="bg-gray"
      />

      <ScoreCell
        title="O"
        score={circle}
        colorClass="bg-secondary"
      />
    </footer>
  );
};
