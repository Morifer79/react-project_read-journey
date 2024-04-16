import { Mainboard } from 'components/Constructor/Mainboard/Mainboard';
import { Pagination } from './Pagination/Pagination';
import { RecommendedBookList } from './RecommendedBookList/RecommendedBookList';

export const RecommendedMainboard = () => {
  return (
    <Mainboard>
      <Pagination />
      <RecommendedBookList />
    </Mainboard>
  );
};
