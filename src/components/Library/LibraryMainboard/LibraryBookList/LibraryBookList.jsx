import { LibraryBookCard } from './LibraryBookCard/LibraryBookCard';
import {
  FlexBox,
  LibraryList,
  NoImageBox,
  StyledSelect,
} from './LibraryBookList.styled';
import books from '../../../../images/books.png';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOwnBook } from '../../../../redux/books/booksOperations';
import { BtnWrapper } from 'components/Recommended/RecommendedMainboard/Pagination/Pagination.styled';
import { Form, Formik } from 'formik';
import { useBooks } from '../../../../hooks/useBooks';

export const LibraryBookList = () => {
  const [selectedBooks, setSelectedBooks] = useState('All books');
  const dispatch = useDispatch();
  const { newBook } = useBooks();

  const handleSelectedBooks = e => {
    setSelectedBooks(e.target.value);
    // dispatch(getOwnBook(e.target.value));
  };

  useEffect(() => {
    dispatch(getOwnBook(selectedBooks));
  }, [dispatch, selectedBooks]);

  return (
    <>
      <BtnWrapper>
        <h3>My library</h3>
        <Formik>
          <Form>
            <StyledSelect
              as="select"
              name="books"
              defaultValue="All books"
              onChange={handleSelectedBooks}
            >
              <option value="Unread">Unread</option>
              <option value="In progress">In progress</option>
              <option value="Done">Done</option>
              <option value="All books">All books</option>
            </StyledSelect>
          </Form>
        </Formik>
      </BtnWrapper>
      <FlexBox>
        {newBook?.length !== 0 ? (
          <LibraryList>
            {newBook?.map(book => (
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
    </>
  );
};
