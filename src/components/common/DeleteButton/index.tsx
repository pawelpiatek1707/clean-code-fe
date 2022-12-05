import { Delete } from './DeleteButton.styles';

interface Props {
  onClick?: () => void;
}

export const DeleteButton = ({ onClick }: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return <Delete onClick={handleClick} />;
};
