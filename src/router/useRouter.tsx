import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTING_PATHS } from '../enums';
import { SuspenseComponent } from './utils/SuspenseComponent';

const SignIn = SuspenseComponent(lazy(() => import('../components/SignIn')));
const Tasks = SuspenseComponent(lazy(() => import('../components/Tasks')));
const Events = SuspenseComponent(lazy(() => import('../components/Events')));
const Profile = SuspenseComponent(lazy(() => import('../components/Profile')));
const Error = SuspenseComponent(lazy(() => import('../components/Error')));

export const useRouter = () => {
  const appRouter = useRoutes([
    {
      path: ROUTING_PATHS.SIGN_IN,
      element: SignIn
    },
    {
      path: ROUTING_PATHS.TASKS,
      element: Tasks
    },
    {
      path: ROUTING_PATHS.EVENTS,
      element: Events
    },
    {
      path: ROUTING_PATHS.PROFILE,
      element: Profile
    },
    {
      path: '*',
      element: Error
    }
  ]);

  return appRouter;
};
