import { Logo } from '../components/Logo';
import { MarkSelect } from '../components/MarkSelect';
import { NewGameButton } from '../components/NewGameButton';

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
