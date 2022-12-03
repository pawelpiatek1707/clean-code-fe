import { PlusOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { ButtonContainer } from './AddItemButton.styles';

interface Props {
  text: string;
  onClick?: () => void;
}

export const AddItemButton = ({ text, onClick }: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ButtonContainer type="link" onClick={handleClick}>
      <Space>
        <PlusOutlined />
        <p>{text}</p>
      </Space>
    </ButtonContainer>
  );
};
