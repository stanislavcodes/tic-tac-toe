import { Link } from 'react-router-dom';

export const NewGameButton = ({ to }: { to: 'cpu' | 'player' }) => {
  return (
    <Link
      className="flex h-16 w-full items-center justify-center rounded-xl bg-secondary text-xl font-bold uppercase text-dark shadow-md transition-colors hover:bg-primary focus:bg-primary"
      to={to}
    >
      {/* <button className="h-16 w-full rounded-xl bg-secondary text-xl font-bold uppercase text-dark shadow-md transition-colors hover:bg-primary"> */}
      {`NEW GAME (VS ${to.toUpperCase()})`}
      {/* </button> */}
    </Link>
  );
};
