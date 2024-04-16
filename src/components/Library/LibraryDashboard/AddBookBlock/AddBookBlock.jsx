import { ErrMsg, Label } from 'components/AuthForms/RegisterForm/RegisterForm.styled';
import {
  BtnFilter,
  LabelBox,
  StyledInput,
  Text,
} from 'components/Recommended/RecommendedDashboard/FilterBlock/FilterBlock.styled';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../../../redux/books/booksOperations';
import { useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { AddToLibrary } from 'components/PopUp/Notifications/AddToLibrary';

export const AddBookBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const createLibrarySchema = Yup.object({
    title: Yup.string().trim().required('Title is a required field'),
    author: Yup.string().trim().required('Author is a required field'),
    pages: Yup.number()
      .positive()
      .integer()
      .truncate()
      .required('Pages is a required field'),
  });

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleSubmit = ({ title, author, pages }, { resetForm }) => {
    dispatch(addNewBook({ title, author, totalPages: pages }));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    resetForm();
  };

  return (
    <Formik
      initialValues={{ title: '', author: '', pages: '' }}
      validationSchema={createLibrarySchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Text>Create your library:</Text>
        <LabelBox>
          <Label htmlFor="title">Book title:</Label>
          <StyledInput type="text" name="title" id="title" />
          <ErrMsg name="title" component="div" />
        </LabelBox>
        <LabelBox>
          <Label htmlFor="author">The author:</Label>
          <StyledInput type="text" name="author" id="author" />
          <ErrMsg name="author" component="div" />
        </LabelBox>
        <LabelBox>
          <Label htmlFor="totalPages">Number of pages:</Label>
          <StyledInput type="number" name="pages" id="totalPages" />
          <ErrMsg name="pages" component="div" />
        </LabelBox>
        <BtnFilter type="submit">
          <span>Add Book</span>
        </BtnFilter>
        {isModalOpen && (
          <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
            <AddToLibrary onRequestClose={closeModal} />
          </PopUp>
        )}
      </Form>
    </Formik>
  );
};
