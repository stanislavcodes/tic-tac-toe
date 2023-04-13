import { Logo } from '../components/Logo';
import { NewGameButton } from '../components/NewGameButton';

const MarkSelect = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-dark px-8 py-6">
      <h2 className="text-center text-xl font-bold uppercase">
        Pick your mark
      </h2>

      <div className="h-20 w-full rounded-xl bg-bg p-4">
        <button className="cross"></button>
      </div>

      <h2 className="text-md text-gray text-center font-bold uppercase">
        Don't forget that X goes first!
      </h2>
    </div>
  );
};

export const Welcome = () => {
  return (
    <div className="flex w-80 flex-col items-center gap-8 sm:w-2/3 md:w-1/2 xl:w-1/3">
      <header className="flex h-8 w-full justify-center">
        <Logo heightClass="h-10" />
      </header>

      <MarkSelect />

      <NewGameButton to="player" />
      <NewGameButton to="cpu" />
    </div>
  );
};
