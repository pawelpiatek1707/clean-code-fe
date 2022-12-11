import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, MenuProps } from 'antd';
import { AlertOutlined, CalendarOutlined, ImportOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { MENU_ITEM_KEYS, ROUTING_PATHS } from '@/enums';
import { useMenuKey } from '@/hooks';
import { removeToken, removeUserId } from '@/api/helpers';
import { BottomContainer, ContentContainer, LayoutContainer, Logo, LogoContainer, LogoText, SideBar, SignOutButton } from './MainLayout.styles';

const { Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const menuKey = useMenuKey();

  const handleSignOut = () => {
    removeToken()
    removeUserId()
    navigate(`/${ROUTING_PATHS.SIGN_IN}`);
  }

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
    },
    {
      key: MENU_ITEM_KEYS.PROFILE,
      label: 'Profil',
      icon: <SmileOutlined />,
      onClick: () => navigate(`/${ROUTING_PATHS.PROFILE}`)
    }
  ];
  return (
    <LayoutContainer>
      <SideBar>
        <LogoContainer>
          <Logo />
          <LogoText>Clean Code</LogoText>
        </LogoContainer>
        <Menu theme="dark" defaultSelectedKeys={[menuKey]} mode="inline" items={items1} />
        <BottomContainer>
          <SignOutButton type='text' onClick={handleSignOut}>
            <ImportOutlined />
            Wyloguj się
          </SignOutButton>
        </BottomContainer>
      </SideBar>
      <Layout>
        <Content>
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Content>
      </Layout>
    </LayoutContainer>
  );
};

export default MainLayout;
