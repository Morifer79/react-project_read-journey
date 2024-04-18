import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectTotalPage,
  selectNewBooks,
  selectReadBook,
  selectOwnBook,
} from '../redux/books/booksSelectors';

export const useBooks = () => {
  const books = useSelector(selectBooks);
  const totalPage = useSelector(selectTotalPage);
  const newBook = useSelector(selectNewBooks);
  const readBook = useSelector(selectReadBook);
  const ownBook = useSelector(selectOwnBook);

  return {
    books,
    totalPage,
    newBook,
    readBook,
    ownBook,
  };
};
