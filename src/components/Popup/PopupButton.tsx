interface PopupButtonProps {
  text: string;
  handleClick: () => void;
}

export const PopupButton = ({ text, handleClick }: PopupButtonProps) => {
  return (
    <button
      className="flex h-10 grow items-center justify-center rounded-xl bg-primary px-2 text-xl font-bold uppercase text-dark shadow-md transition-colors hover:bg-primary/80 max-[370px]:text-sm sm:h-12"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
