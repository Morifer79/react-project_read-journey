import { BtnAdd, ModalBody } from './RecommendedModalContent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import noImg from '../../../images/no-image.png';
import { addExistBooks } from '../../../redux/books/booksOperations';
import { selectNewBooks } from '../../../redux/books/booksSelectors';
import toast from 'react-hot-toast';

export const RecommendedModalContent = ({ books }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBook = useSelector(selectNewBooks);
  const { imageUrl, title, author, totalPages, _id } = books;

  const handleClick = () => {
    toast.success('Book added.');
    dispatch(addExistBooks({ _id }));
    navigate('/library');
  };

  const addedBook = newBook.some(book => book.title === title);

  return (
    <ModalBody>
      {addedBook ? (
        <>
          <img src={imageUrl ? imageUrl : noImg} alt={title} width={137} />
          <h3>This book is already in the library.</h3>
        </>
      ) : (
        <>
          <img src={imageUrl ? imageUrl : noImg} alt={title} />
          <h4>{title}</h4>
          <h5>{author}</h5>
          <h6>{totalPages} pages</h6>
          <BtnAdd onClick={handleClick}>
            <span>Add to library</span>
          </BtnAdd>
        </>
      )}
    </ModalBody>
  );
};
