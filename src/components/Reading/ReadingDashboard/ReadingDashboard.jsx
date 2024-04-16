import { Dashboard } from 'components/Constructor/Dashboard/Dashboard';
import { AddReading } from './AddReading/AddReading';
import { ProgressBlock } from './ProgressBlock/ProgressBlock';
import { Details } from './Details/Details';
import { useSelector } from 'react-redux';
import { selectReadBook } from '../../../redux/books/booksSelectors';

export const ReadingDashboard = () => {
  const books = useSelector(selectReadBook);
  console.log(books);
  
  return (
    <Dashboard>
      <AddReading />
      {books.timeLeftToRead ? <ProgressBlock /> : <Details />}
    </Dashboard>
  );
};
