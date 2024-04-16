import { Container } from 'components/Constructor/Container/Container';
import { LibraryDashboard } from './LibraryDashboard/LibraryDashboard';
import { LibraryMainboard } from './LibraryMainboard/LibraryMainboard';

export const Library = () => {
  return (
    <Container>
      <LibraryDashboard />
      <LibraryMainboard />
    </Container>
  );
};
