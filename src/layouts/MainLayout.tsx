import { Outlet } from 'react-router-dom';
import { Layout, Menu, MenuProps } from 'antd';
import { LayoutContainer, Logo, LogoContainer, LogoText } from './MainLayout.styles';

const { Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}));

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Sider>
        <LogoContainer>
          <Logo />
          <LogoText>Clean Code</LogoText>
        </LogoContainer>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items1} />
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </LayoutContainer>
  );
};

export default MainLayout;
