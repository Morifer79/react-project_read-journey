import { useEffect, useState } from 'react';
import { RecommendedBookCard } from './RecommendedBookCard/RecommendedBookCard';
import { Booklist } from './RecommendedBookList.styled';
import { useDispatch } from 'react-redux';
import { getAll } from '../../../../redux/books/booksOperations';
import { useBooks } from '../../../../hooks/useBooks';

export const RecommendedBookList = () => {
  const [page] = useState(1);
  const [limit, setLimit] = useState(10);

  const dispatch = useDispatch();
  const { books } = useBooks();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setLimit(
        screenWidth < 768
          ? 2
          : screenWidth > 1439
          ? 10
          : 8
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
