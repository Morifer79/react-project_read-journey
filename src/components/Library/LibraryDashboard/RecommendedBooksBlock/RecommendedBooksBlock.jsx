import {
  RecommendedBooks,
  RecommendedBookslist,
  StyledLink,
} from './RecommendedBooksBlock.styled';
import SpriteIcons from '../../../../images/sprite.svg';
import noImg from '../../../../images/no-image.png';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAll } from '../../../../redux/books/booksOperations';
import { useBooks } from '../../../../hooks/useBooks';

export const RecommendedBooksBlock = () => {
  const [page] = useState(1);
  const [limit] = useState(3);
  const dispatch = useDispatch();
  const { books } = useBooks();

  useEffect(() => {
    dispatch(getAll({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <RecommendedBooks>
      <h3>Recommended</h3>
      <RecommendedBookslist>
        {books.map(book => (
          <li key={book._id}>
            <img src={book.imageUrl ? book.imageUrl : noImg} alt={book.title} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
          </li>
        ))}
      </RecommendedBookslist>
      <StyledLink to="/recommended">
        Home
        <svg width="24" height="24">
          <use xlinkHref={`${SpriteIcons}#icon-arrow`} />
        </svg>
      </StyledLink>
    </RecommendedBooks>
  );
};
