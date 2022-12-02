import { CodeOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';
import { colors } from '@/theme';

export const LayoutContainer = styled(Layout)`
  height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const Logo = styled(CodeOutlined)`
  color: ${colors.lightPrimary};
  font-size: 32px;
  margin-right: 8px;
`;

export const LogoText = styled.p`
  color: ${colors.lightPrimary};
`;

export const ContentContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
