import SpriteIcons from '../../../../../images/sprite.svg';
import noImg from '../../../../../images/no-image.png';
import { PopUp } from '../../../../PopUp/PopUp';
import { LibraryModalContent } from '../../../LibraryModalContent/LibraryModalContent';
import { BtnDelete, FlexContainer, Wrapper } from './LibraryBookCard.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../../../redux/books/booksOperations';

export const LibraryBookCard = ({ books }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { imageUrl, title, author, _id } = books;

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <Wrapper>
      <li>
        <img src={imageUrl ? imageUrl : noImg} alt="book" onClick={openModal} />
        <FlexContainer>
          <div>
            <h4>{title}</h4>
            <h5>{author}</h5>
          </div>
  
          <BtnDelete onClick={() => dispatch(removeBook(_id))}>
            <svg width="28" height="28">
              <use xlinkHref={`${SpriteIcons}#icon-trash`} />
            </svg>
          </BtnDelete>
        </FlexContainer>
      </li>
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <LibraryModalContent onRequestClose={closeModal} books={books} />
      </PopUp>
    </Wrapper>
  );
};
