import { DiaryBlock } from './DiaryBlock/DiaryBlock';
import { StatisticsBlock } from './StatisticsBlock/StatisticsBlock';
import { useSelector } from 'react-redux';
import { selectReadBook } from '../../../../redux/books/booksSelectors';

export const Details = () => {
  const readBook = useSelector(selectReadBook);  

  return <>{readBook.timeLeftToRead ? <StatisticsBlock /> : <DiaryBlock />}</>;
};
