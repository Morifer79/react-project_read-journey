import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const SharedLayout = () => {
  const location = useLocation();
  const userLocation =
    location.pathname === '/register' || location.pathname === '/login';

  return (
    <GlobalContainer>
      {!userLocation && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
