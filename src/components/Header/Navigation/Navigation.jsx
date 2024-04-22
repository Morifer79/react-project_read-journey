import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from '../../../hooks/useAuth';

export const Navigation = ({onClose}) => {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn ? <UserNav onClose={ onClose} /> : <AuthNav />}</>;
};
