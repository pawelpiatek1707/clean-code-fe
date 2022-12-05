import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTING_PATHS } from '../enums';
import { SuspenseComponent } from './utils/SuspenseComponent';

const MainLayout = SuspenseComponent(lazy(() => import('../layouts/MainLayout')));

const SignIn = SuspenseComponent(lazy(() => import('../components/SignIn')));
const Tasks = SuspenseComponent(lazy(() => import('../components/Tasks')));
const Events = SuspenseComponent(lazy(() => import('../components/Events')));
const Error = SuspenseComponent(lazy(() => import('../components/Error')));
const Users = SuspenseComponent(lazy(() => import('../components/Users')));

export const useRouter = () => {
  const appRouter = useRoutes([
    {
      path: '/',
      element: <Navigate to={ROUTING_PATHS.USERS} replace />
    },
    {
      path: ROUTING_PATHS.SIGN_IN,
      element: SignIn
    },
    {
      element: MainLayout,
      children: [
        {
          path: ROUTING_PATHS.TASKS,
          element: Tasks
        },
        {
          path: ROUTING_PATHS.EVENTS,
          element: Events
        },
        {
          path: ROUTING_PATHS.USERS,
          element: Users
        }
      ]
    },
    {
      path: '*',
      element: Error
    }
  ]);

  return appRouter;
};
