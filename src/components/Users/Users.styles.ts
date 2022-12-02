import styled from 'styled-components';
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { colors, fonts } from '@/theme';

const { Title } = Typography;

export const Container = styled.div`
  padding: 32px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Header = styled(Title)`
  margin-bottom: 32px !important;
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
