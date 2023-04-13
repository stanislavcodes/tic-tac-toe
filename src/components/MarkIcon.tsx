import CircleIconOutline from '../assets/circle-outline.svg';
import CircleIcon from '../assets/circle.svg';
import CrossIconOutline from '../assets/cross-outline.svg';
import CrossIcon from '../assets/cross.svg';
import { Mark } from '../enums/Mark';

interface IconProps {
  mark: Omit<Mark, Mark.Empty>;
  outline: boolean;
  heightClass?: string;
}

export const MarkIcon = ({
  mark,
  outline,
  heightClass = 'h-full',
}: IconProps) => {
  const src =
    mark === Mark.Cross
      ? outline
        ? CrossIconOutline
        : CrossIcon
      : outline
        ? CircleIconOutline
        : CircleIcon;

  return <img className={heightClass} src={src} alt={`${mark} mark`} />;
};
