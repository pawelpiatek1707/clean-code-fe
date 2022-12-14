import { useLocation } from 'react-router-dom';
import { MENU_ITEM_KEYS, ROUTING_PATHS } from '@/enums';

export const useMenuKey = () => {
  const { pathname } = useLocation();
  let menuKey: MENU_ITEM_KEYS;

  switch (pathname) {
    case `/${ROUTING_PATHS.USERS}`: {
      menuKey = MENU_ITEM_KEYS.USERS;
      break;
    }
    case `/${ROUTING_PATHS.EVENTS}`: {
      menuKey = MENU_ITEM_KEYS.EVENTS;
      break;
    }
    case `/${ROUTING_PATHS.TASKS}`: {
      menuKey = MENU_ITEM_KEYS.TASKS;
      break;
    }
    case `/${ROUTING_PATHS.PROFILE}`: {
      menuKey = MENU_ITEM_KEYS.PROFILE;
      break;
    }
    default: {
      menuKey = MENU_ITEM_KEYS.USERS;
      break;
    }
  }

  return menuKey;
};
