// import React,{ useEffect,useState } from 'react';

// type ReturnType<T> = [
//   T | undefined,
//   React.Dispatch<React.SetStateAction<T | undefined>>,
// ]

// export const useLocalStorage = <T,>(key: string, defaultValue: T): ReturnType<T> => {
//   const [value, setValue] = useState<T | undefined>(() => {
//     try {
//       const saved = localStorage.getItem(key);

//       console.log(key, saved, defaultValue);

//       return saved ? JSON.parse(saved) : defaultValue;
//     } catch (err) {
//       return defaultValue;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (err) {
//       console.log(err);
//     }
//   }, [key, value]);

//   return [value, setValue];
// };

import { useState } from 'react';
import { Scores } from '../types/Scores';

export const useLocalStorageScore = (): [Scores, (newScore: Scores) => void] => {
  const [score, setScore] = useState<Scores>(() => {
    const storedScore = localStorage.getItem('score');

    if (storedScore) {
      return JSON.parse(storedScore);
    } else {
      return { cross: 0, ties: 0, circle: 0 };
    }
  });

  const updateScore = (newScore: Scores) => {
    localStorage.setItem('score', JSON.stringify(newScore));
    setScore(newScore);
  };

  return [score, updateScore];
};