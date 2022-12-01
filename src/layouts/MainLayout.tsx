import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, MenuProps } from 'antd';
import { AlertOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { LayoutContainer, Logo, LogoContainer, LogoText } from './MainLayout.styles';
import { MENU_ITEM_KEYS, ROUTING_PATHS } from '@/enums';
import { useMenuKey } from '@/hooks';

const { Content, Sider } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const menuKey = useMenuKey();

  const items1: MenuProps['items'] = [
    {
      key: MENU_ITEM_KEYS.USERS,
      label: 'Uytkownicy',
      icon: <UserOutlined />,
      onClick: () => navigate(`/${ROUTING_PATHS.USERS}`)
    },
    {
      key: MENU_ITEM_KEYS.EVENTS,
      label: 'Wydarzenia',
      icon: <AlertOutlined />,
      onClick: () => navigate(`/${ROUTING_PATHS.EVENTS}`)
    },
    {
      key: MENU_ITEM_KEYS.TASKS,
      label: 'Zadania',
      icon: <CalendarOutlined />,
      onClick: () => navigate(`/${ROUTING_PATHS.TASKS}`)
    }
  ];
  return (
    <LayoutContainer>
      <Sider>
        <LogoContainer>
          <Logo />
          <LogoText>Clean Code</LogoText>
        </LogoContainer>
        <Menu theme="dark" defaultSelectedKeys={[menuKey]} mode="inline" items={items1} />
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
