import Modal from 'react-modal';
import SpriteIcons from '../../images/sprite.svg';
import { CloseBtn, ModalHeader } from './PopUp.styled';
import { createPortal } from 'react-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid rgba(104, 104, 104, 0.2)',
    borderRadius: '12px',
    zIndex: '1300',
    overflowY: 'auto',
    scrollbarColor: '#888 #e0e0e0',
    scrollbarWidth: 'thin',
    backgroundColor: '#1F1F1F',
  },
  overlay: {
    backgroundColor: 'rgba(20, 20, 20, .6)',
    zIndex: '1',
  },
};

Modal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');

export const PopUp = ({ isOpen, onRequestClose, children }) => {
  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <ModalHeader>
        <CloseBtn onClick={onRequestClose}>
          <svg width="22" height="22">
            <use xlinkHref={`${SpriteIcons}#icon-x`} />
          </svg>
        </CloseBtn>
      </ModalHeader>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};
