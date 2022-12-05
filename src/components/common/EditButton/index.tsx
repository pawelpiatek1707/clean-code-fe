import { Edit } from './EditButton.styles';

interface Props {
  onClick?: () => void;
}

export const EditButton = ({ onClick }: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return <Edit onClick={handleClick} />;
};
