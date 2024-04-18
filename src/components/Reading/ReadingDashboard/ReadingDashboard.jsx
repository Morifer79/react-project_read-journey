import { Dashboard } from 'components/Constructor/Dashboard/Dashboard';
import { AddReading } from './AddReading/AddReading';
import { ProgressBlock } from './ProgressBlock/ProgressBlock';
import { Details } from './Details/Details';
import { useBooks } from '../../../hooks/useBooks';

export const ReadingDashboard = () => {
  const { newBook } = useBooks();

  return (
    <Dashboard>
      <AddReading />
      {newBook.status === 'unread' ? <ProgressBlock /> : <Details />}
    </Dashboard>
  );
};
