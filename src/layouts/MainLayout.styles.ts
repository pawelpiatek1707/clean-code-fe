import { CodeOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import styled from 'styled-components';
import { colors } from '@/theme';

const {Sider} = Layout

export const LayoutContainer = styled(Layout)`
  height: 100vh;
`;

export const SideBar = styled(Sider)`
  position: relative;
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

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
`

export const SignOutButton = styled(Button)`
  color: ${colors.grayTertiary};
  &:hover {
    color: ${colors.lightPrimary}!important;
    transition: .3;
  }
`;
