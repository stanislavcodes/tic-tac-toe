import { Link } from 'react-router-dom';

const buttonStyles = '';

interface PopupLinkProps {
  text: string;
  to: string;
}

export const PopupLink = ({ text, to }: PopupLinkProps) => {
  return (
    <Link
      className="flex h-10 grow items-center justify-center rounded-xl bg-secondary px-2 text-xl font-bold uppercase text-dark shadow-md transition-colors hover:bg-secondary/80 max-[370px]:text-sm sm:h-12"
      to={to}
    >
      {text}
    </Link>
  );
};
