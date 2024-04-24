import { PopUp } from '../../../../PopUp/PopUp';
import { RecommendedModalContent } from '../../../RecommendedModalContent/RecommendedModalContent';
import { useState } from 'react';
import { CardWrapper, ImageThumb } from './RecommendedBookCard.styled';
import noImg from '../../../../../images/no-image.png';

export const RecommendedBookCard = ({ books }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { imageUrl, title, author } = books;

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <CardWrapper onClick={openModal}>
        <ImageThumb>
          <img src={imageUrl ? imageUrl : noImg} alt={title} />
        </ImageThumb>
        <h4>{title}</h4>
        <h5>{author}</h5>
      </CardWrapper>
      <PopUp isOpen={isModalOpen} onRequestClose={closeModal}>
        <RecommendedModalContent onRequestClose={closeModal} books={books} />
      </PopUp>
    </>
  );
};
