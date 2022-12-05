import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { colors, fonts } from '@/theme';

export const Edit = styled(EditOutlined)`
  color: ${colors.blueSecondary};
  font-size: ${fonts.textXL.fontSize};
  cursor: pointer;
`;
