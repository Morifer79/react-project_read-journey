import { Dashboard } from 'components/Constructor/Dashboard/Dashboard';
import { AddBookBlock } from './AddBookBlock/AddBookBlock';
import { RecommendedBooksBlock } from './RecommendedBooksBlock/RecommendedBooksBlock';

export const LibraryDashboard = () => {
  return (
    <Dashboard>
      <AddBookBlock />
      <RecommendedBooksBlock />
    </Dashboard>
  );
};
