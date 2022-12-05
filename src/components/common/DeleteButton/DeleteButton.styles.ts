import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { colors, fonts } from '@/theme';

export const Delete = styled(DeleteOutlined)`
  color: ${colors.redPrimary};
  font-size: ${fonts.textXL.fontSize};
  margin-right: 8px;
  cursor: pointer;
`;
