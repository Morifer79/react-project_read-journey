import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from '../../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn ? <UserNav /> : <AuthNav />}</>
};
