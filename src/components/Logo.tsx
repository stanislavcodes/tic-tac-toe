import LogoSVG from '../assets/logo.svg';

export const Logo = ({ heightClass = 'h-full' }: { heightClass?: string }) => {
  return <img className={heightClass} src={LogoSVG} alt="Tic Tac Toe Logo" />;
};
