import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const GlobalContainer = styled.div`
  margin: 0 auto;
  inline-size: 100%;
  max-inline-size: 1440px;
  padding: 20px;
  @media screen and (min-width: 376px) {
    max-inline-size: 375px;
  }
  @media screen and (min-width: 768px) {
    max-inline-size: 768px;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-inline-size: 1280px;
  }
`;

export const SharedLayout = () => {
  const location = useLocation();
  const userLocation =
    location.pathname === '/reading' ||
    location.pathname === '/recommended' ||
    location.pathname === '/library';

  return (
    <GlobalContainer>
      {userLocation && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalContainer>
  );
};
