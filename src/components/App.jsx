import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';
import { RestrictedRoute } from './Route/RestrictedRoute';
import { PrivateRoute } from './Route/PrivateRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RecommendedPage = lazy(() => import('../pages/RecommendedPage'));
const MyLibraryPage = lazy(() => import('../pages/MyLibraryPage'));
const ReadingPage = lazy(() => import('../pages/ReadingPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/recommended"
            element={
              <PrivateRoute
                redirectTo="/recommended"
                component={<RecommendedPage />}
              />
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute
                redirectTo="/library"
                component={<MyLibraryPage />}
              />
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute redirectTo="/library" component={<ReadingPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
