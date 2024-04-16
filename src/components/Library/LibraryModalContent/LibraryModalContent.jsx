import { ModalBody } from './LibraryModalContent.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addReadBook } from '../../../redux/books/booksOperations';
import { BtnFilter } from 'components/Recommended/RecommendedDashboard/FilterBlock/FilterBlock.styled';
import noImg from '../../../images/no-image.png';

export const LibraryModalContent = ({ books }) => {
  const { imageUrl, title, author, totalPages, _id } = books;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(addReadBook({ _id }));
    navigate('/reading');
  };
  
  return (
    <ModalBody>
      <img src={imageUrl ? imageUrl : noImg} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
      <h6>{totalPages} pages</h6>
      <BtnFilter onClick={handleClick}>
        <span>Start reading</span>
      </BtnFilter>
    </ModalBody>
  );
};
