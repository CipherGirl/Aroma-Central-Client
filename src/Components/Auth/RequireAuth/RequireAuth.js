import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Loader } from '@mantine/core';

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loader color="dark" size="xl" variant="dots" />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
