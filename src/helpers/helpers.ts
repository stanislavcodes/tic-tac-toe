import { Mark } from '../enums/Mark';
import { RoundResult } from '../enums/RoundResult';
import { PlayersMark } from '../types/PlayersMark';

export const checkRound = (marks: Mark[]): RoundResult | null => {
  const checkWin = (line: Mark[]) => {
    if (line.every((cell) => line[0] !== Mark.Empty && cell === line[0])) {
      return line[0] === Mark.Circle ? RoundResult.Circle : RoundResult.Cross;
    }

    return null;
  };

  const row1 = marks.slice(0, 3);
  const row2 = marks.slice(3, 6);
  const row3 = marks.slice(6);
  const col1 = [marks[0], marks[3], marks[6]];
  const col2 = [marks[1], marks[4], marks[7]];
  const col3 = [marks[2], marks[5], marks[8]];
  const diagonal1 = [marks[0], marks[4], marks[8]];
  const diagonal2 = [marks[2], marks[4], marks[6]];

  const lines = [row1, row2, row3, diagonal1, diagonal2, col1, col2, col3];

  for (const line of lines) {
    const result = checkWin(line);

    if (result !== null) {
      return result;
    }
  }

  if (
    row1.includes(Mark.Empty) ||
    row2.includes(Mark.Empty) ||
    row3.includes(Mark.Empty)
  ) {
    return null;
  }

  return RoundResult.Tie;
};

const winningCombos = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const findWinningMove = (marks: Mark[], mark: PlayersMark): number | null => {
  console.log(`checking best for ${mark}...`);
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (marks[a] === mark && marks[b] === mark && marks[c] === Mark.Empty) {
      return c;
    }
    if (marks[a] === mark && marks[b] === Mark.Empty && marks[c] === mark) {
      return b;
    }
    if (marks[a] === Mark.Empty && marks[b] === mark && marks[c] === mark) {
      return a;
    }
  }

  return null;
};

export const getCpuMove = (marks: Mark[], cpuMark: PlayersMark): number => {
  // check if cpu can win
  const winningPosition = findWinningMove(marks, cpuMark);

  if (winningPosition) {
    return winningPosition;
  }

  const playersMark = cpuMark === Mark.Circle ? Mark.Cross : Mark.Circle;

  // check if cpu can prevent players win
  const preventWinningPosition = findWinningMove(marks, playersMark);

  if (preventWinningPosition) {
    return preventWinningPosition;
  }

  const availableIndexes: number[] = marks.reduce(
    (indexes: number[], value: Mark, index: number) => {
      if (value === Mark.Empty) {
        indexes.push(index);
      }
      return indexes;
    },
    [],
  );

  if (availableIndexes.length > 1) {
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);

    return availableIndexes[randomIndex];
  }

  return availableIndexes[0];
};
