import { BtnWrapper } from "components/Recommended/RecommendedMainboard/Pagination/Pagination.styled";
import { Form, Formik } from "formik";
import { StyledSelect } from "./SelectionBlock.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LibraryBookList } from "../LibraryBookList/LibraryBookList";
import { getOwnBook } from "../../../../redux/books/booksOperations";
import { useQueryParams } from "hooks/useQueryParams";


export const SelectionBlock = () => {
  const dispatch = useDispatch();
  const { selectBook, changeBook } = useQueryParams();

useEffect(() => {
  dispatch(getOwnBook({ status: selectBook }));
}, [dispatch, selectBook]);

  return (
    <>
      <BtnWrapper>
        <h3>My library</h3>
        <Formik>
          <Form>
            <StyledSelect
              as="select"
              name="books"
              value={selectBook}
              onChange={e => changeBook(e.target.value)}
            >
              <option value="unread">Unread</option>
              <option value="in-progress">In progress</option>
              <option value="done">Done</option>
              <option value="all-books">All books</option>
            </StyledSelect>
          </Form>
        </Formik>
      </BtnWrapper>
      <LibraryBookList status={selectBook} />
    </>
  );
};
