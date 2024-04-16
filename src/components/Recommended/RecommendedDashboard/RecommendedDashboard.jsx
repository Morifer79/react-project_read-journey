import { Dashboard } from 'components/Constructor/Dashboard/Dashboard';
import { FilterBlock } from './FilterBlock/FilterBlock';
import { GetStartedBlock } from './GetStartedBlock/GetStartedBlock';
import { QuoteBlock } from './QuoteBlock/QuoteBlock';

export const RecommendedDashboard = () => {
  return (
    <Dashboard>
      <FilterBlock />
      <GetStartedBlock />
      <QuoteBlock />
    </Dashboard>
  );
};
