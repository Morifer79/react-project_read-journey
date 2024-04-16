import { Container } from 'components/Constructor/Container/Container';
import { ReadingDashboard } from './ReadingDashboard/ReadingDashboard';
import { ReadingMainboard } from './ReadingMainboard/ReadingMainboard';

export const Reading = () => {
  return (
    <Container>
      <ReadingDashboard />
      <ReadingMainboard />
    </Container>
  );
};
