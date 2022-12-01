import { RouteObject, useRoutes } from 'react-router-dom';
import { authRoutes } from './routes/authRoutes';

export const Router = () => {
  const routes: RouteObject[] = [authRoutes];

  return useRoutes(routes);
};
