import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { AuthLayout } from '@/layouts';
import { ROUTER_PATHS } from '@/enums';
import { SuspenseComponent } from '../utils/SuspenseComponent';
import { GuestGuard } from '../guards';

const SignIn = SuspenseComponent(lazy(() => import('../../pages/SignIn')));

export const authRoutes: RouteObject = {
  element: (
    <GuestGuard>
      <AuthLayout />
    </GuestGuard>
  ),
  children: [
    {
      path: ROUTER_PATHS.SIGN_IN,
      element: SignIn
    }
  ]
};
