import { Mark } from '../enums/Mark';

export const checkWinner = (marks: Mark[]): Omit<Mark, Mark.Empty> | null => {
  const checkWin = (line: Mark[]) => {
    if (line.every((cell) => line[0] !== Mark.Empty && cell === line[0])) {
      return line[0];
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

  // if (row1.includes(0) || row2.includes(0) || row3.includes(0)) {
  //   return -1;
  // }

  return null;
};
