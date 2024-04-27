import { BtnWrapper } from 'components/Recommended/RecommendedMainboard/Pagination/Pagination.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { LibraryBookList } from '../LibraryBookList/LibraryBookList';
import { getOwnBook } from '../../../../redux/books/booksOperations';
import { useQueryParams } from 'hooks/useQueryParams';
import Select from 'react-select';

export const SelectionBlock = () => {
  const [currentBook, setCurrentBook] = useState('all-books');
  const dispatch = useDispatch();
  const { selectBook, changeBook } = useQueryParams();

  const options = [
    { value: 'unread', label: 'Unread' },
    { value: 'in-progress', label: 'In progress' },
    { value: 'done', label: 'Done' },
    { value: 'all-books', label: 'All books' },
  ];

  const getValue = () => {
    return currentBook ? options.find(book => book.value === currentBook) : '';
  };

  const handleChange = newValue => {
    setCurrentBook(newValue.value);
    changeBook(newValue.value);
  };

  useEffect(() => {
    dispatch(getOwnBook({ status: selectBook }));
  }, [dispatch, selectBook]);

  return (
    <>
      <BtnWrapper>
        <h3>My library</h3>
        <Select
          classNamePrefix="custom-select"
          name="books"
          defaultValue={currentBook}
          options={options}
          value={getValue()}
          onChange={handleChange}
          isSearchable={false}
        />
      </BtnWrapper>
      <LibraryBookList status={selectBook} />
    </>
  );
};
