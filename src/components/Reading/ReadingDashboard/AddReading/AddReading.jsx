import {
  ErrMsg,
  Label,
  StyledInput,
} from 'components/AuthForms/RegisterForm/RegisterForm.styled';
import {
  BtnFilter,
  LabelBox,
  Text,
} from 'components/Recommended/RecommendedDashboard/FilterBlock/FilterBlock.styled';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { saveFinish, saveStart } from '../../../../redux/books/booksOperations';
import { useState } from 'react';
import { useBooks } from '../../../../hooks/useBooks';
import { PopUp } from 'components/PopUp/PopUp';
import { EndReading } from 'components/PopUp/Notifications/EndReading';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

export const AddReading = () => {
  const [isReading, setIsReading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { readBook } = useBooks();
  const dispatch = useDispatch();

  const pageSchema = Yup.object({
    page: Yup.number()
      .positive()
      .integer()
      .truncate()
      .required('This is a required field'),
  });

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const id = readBook._id;

  const handleStart = ({ page }, { resetForm }) => {
    if (!isReading) {
      dispatch(saveStart({ id, page }));
      toast.success('The reading has begun...');
      if (readBook.totalPages === parseInt(page)) {
        toast.success('You`ve read to the end.');
      }
      setIsReading(!isReading);
    } else if (isReading) {
      dispatch(saveFinish({ id, page }));
      toast.success('The reading is complete...');
      if (readBook.totalPages === parseInt(page)) {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
      }
      setIsReading(!isReading);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ page: '' }}
      validationSchema={pageSchema}
      onSubmit={handleStart}
    >
      <Form>
        <Text>{`${isReading ? 'Stop' : 'Start'} page:`}</Text>
        <LabelBox>
          <Label htmlFor="page">Page number:</Label>
          <StyledInput type="number" name="page" id="page" />
          <ErrMsg name="page" component="div" />
        </LabelBox>
        <BtnFilter type="submit">
          <span>{`To ${isReading ? 'Stop' : 'Start'}`}</span>
        </BtnFilter>
        {isModalOpen && (
          <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
            <EndReading onRequestClose={closeModal} />
          </PopUp>
        )}
      </Form>
    </Formik>
  );
};
