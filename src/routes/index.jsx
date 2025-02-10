import { BrowserRouter } from 'react-router';

import { useAuth } from '../hooks/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
