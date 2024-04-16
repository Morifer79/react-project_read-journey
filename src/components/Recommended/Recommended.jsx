import { Container } from 'components/Constructor/Container/Container';
import { RecommendedDashboard } from './RecommendedDashboard/RecommendedDashboard';
import { RecommendedMainboard } from './RecommendedMainboard/RecommendedMainboard';

export const Recommended = () => {
  return (
    <Container>
      <RecommendedDashboard />
      <RecommendedMainboard />
    </Container>
  );
};
