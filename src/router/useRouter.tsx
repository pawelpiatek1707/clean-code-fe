import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTING_PATHS } from '../enums';
import { GuestGuard, AuthGuard } from './guards';
import { SuspenseComponent } from './utils/SuspenseComponent';

const MainLayout = SuspenseComponent(lazy(() => import('../layouts/MainLayout')));

const SignIn = SuspenseComponent(lazy(() => import('../components/SignIn')));
const Tasks = SuspenseComponent(lazy(() => import('../components/Tasks')));
const Events = SuspenseComponent(lazy(() => import('../components/Events')));
const Error = SuspenseComponent(lazy(() => import('../components/Error')));
const Users = SuspenseComponent(lazy(() => import('../components/Users')));
const Profile = SuspenseComponent(lazy(() => import('../components/Profile')))

export const useRouter = () => {
  const appRouter = useRoutes([
    {
      path: '/',
      element: <Navigate to={ROUTING_PATHS.USERS} replace />
    },
    {
      path: ROUTING_PATHS.SIGN_IN,
      element: (
        <GuestGuard>
          {SignIn}
        </GuestGuard>
      )
    },
    {
      element: (
        <AuthGuard>
          {MainLayout}
        </AuthGuard>
      ),
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
        },
        {
          path: ROUTING_PATHS.PROFILE,
          element: Profile
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
