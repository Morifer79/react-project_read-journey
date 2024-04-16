import { useEffect, useState } from 'react';
import { RecommendedBookCard } from './RecommendedBookCard/RecommendedBookCard';
import { Booklist } from './RecommendedBookList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../../../redux/books/booksSelectors';
import { getAll } from '../../../../redux/books/booksOperations';

export const RecommendedBookList = () => {
  const [page] = useState(1);
  const [limit, setLimit] = useState(10);

  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  // const { results } = book;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setLimit(
        screenWidth > 1439
          ? 10
          : screenWidth > 767 && screenWidth < 1440
          ? 8
          : 2
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getAll({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <Booklist>
      {books?.map(book => (
        <RecommendedBookCard key={book._id} books={book} />
      ))}
    </Booklist>
  );
};
