import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { colors, fonts } from '@/theme';

const { Title } = Typography;

export const Container = styled.div`
  padding: 32px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Delete = styled(DeleteOutlined)`
  color: ${colors.redPrimary};
  font-size: ${fonts.textXL.fontSize};
  margin-right: 8px;
  cursor: pointer;
`;

export const Edit = styled(EditOutlined)`
  color: ${colors.blueSecondary};
  font-size: ${fonts.textXL.fontSize};
  cursor: pointer;
`;

export const ButtonContainer = styled(Button)`
  margin-bottom: 48px;
  padding-left: 0;
  padding-right: 0;
`;
