import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { getAll } from '../../../../redux/books/booksOperations';
import {
  ErrMsg,
  Label,
} from 'components/AuthForms/RegisterForm/RegisterForm.styled';
import {
  BtnFilter,
  BtnWrapper,
  LabelBox,
  StyledInput,
  Text,
} from './FilterBlock.styled';

export const FilterBlock = () => {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();

  const filterSchema = Yup.object({
    title: Yup.string().trim(),
    author: Yup.string().trim(),
  });

  const handleSubmit = ({ title, author }) => {
    if (title === undefined) return;
    if (title || author) {
      setShowButton(true);
      dispatch(getAll({ title, author }));
    } else {
      toast.error('The search for the Void is the domain of monks');
    }
  };

  const handleReset = resetForm => {
    setShowButton(false);
    resetForm();
    dispatch(getAll({ page: 1, limit: 10 }));
  };

  return (
    <Formik
      initialValues={{ title: '', author: '' }}
      validationSchema={filterSchema}
      onSubmit={handleSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <Text>Filters:</Text>
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
          <BtnWrapper>
            <BtnFilter type="submit">
              <span>To apply</span>
            </BtnFilter>
            {showButton && (
              <BtnFilter type="submit" onClick={() => handleReset(resetForm)}>
                <span>Reset</span>
              </BtnFilter>
            )}
          </BtnWrapper>
        </Form>
      )}
    </Formik>
  );
};
