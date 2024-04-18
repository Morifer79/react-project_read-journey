import { LibraryBookCard } from './LibraryBookCard/LibraryBookCard';
import {
  FlexBox,
  LibraryList,
  NoImageBox,
} from './LibraryBookList.styled';
import books from '../../../../images/books.png';
import { useBooks } from '../../../../hooks/useBooks';

export const LibraryBookList = ({status}) => {
  const { newBook } = useBooks();

  const visibleBook = (status, newBook) => {
    if (status === 'done') {
      return newBook.filter(item => item.status === 'done');
    } else if (status === 'in-progress') {
      return newBook.filter(item => item.status === 'in-progress');
    } else if (status === 'unread') {
      return newBook.filter(item => item.status === 'unread');
    }
    return newBook;
  };

  const visible = visibleBook(status, newBook);

  return (
    <FlexBox>
      {newBook?.length !== 0 ? (
        <LibraryList>
          {visible.map(book => (
            <LibraryBookCard key={book._id} books={book} />
          ))}
        </LibraryList>
      ) : (
        <NoImageBox>
          <img src={books} alt="books" />
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </NoImageBox>
      )}
    </FlexBox>
  );
};
